using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using Telerik.Sitefinity;
using Telerik.Sitefinity.Data;
using Telerik.Sitefinity.DynamicModules;
using Telerik.Sitefinity.DynamicModules.Model;
using Telerik.Sitefinity.Libraries.Model;
using Telerik.Sitefinity.Lifecycle;
using Telerik.Sitefinity.Model;
using Telerik.Sitefinity.RelatedData;
using Telerik.Sitefinity.Security.Claims;
using Telerik.Sitefinity.Utilities.TypeConverters;
using Telerik.Sitefinity.Versioning;

namespace SitefinityWebApp.TorrentTrackerServices
{
    public class TorrentService
    {
        private readonly ImageService _imageService;
        private readonly DocumentService _documentService;
        private readonly TaxonomyService _taxonomyService;

        public TorrentService()
        {
            _imageService = new ImageService();
            _documentService = new DocumentService();
            _taxonomyService = new TaxonomyService();
        }

        public void CreateTorrentWithPublish(CreateTorrentDto createTorrentDto)
        {
            // Set the provider name for the DynamicModuleManager here. All available providers are listed in
            // Administration -> Settings -> Advanced -> DynamicModules -> Providers
            var providerName = "OpenAccessProvider";

            // Set a transaction name and get the version manager
            var transactionName = "someTransactionName";
            var versionManager = VersionManager.GetManager(null, transactionName);

            DynamicModuleManager dynamicModuleManager = DynamicModuleManager.GetManager(providerName, transactionName);
            Type torrentType = TypeResolutionService.ResolveType("Telerik.Sitefinity.DynamicTypes.Model.Torrents.Torrent");
            DynamicContent torrentItem = dynamicModuleManager.CreateDataItem(torrentType);

            // This is how values for the properties are set
            torrentItem.SetValue("AdditionalInfo", createTorrentDto.AdditionalInfo);
            torrentItem.SetValue("Description", createTorrentDto.Description);
            torrentItem.SetValue("Title", createTorrentDto.Title);
            torrentItem.SetValue("CreationDate", DateTime.Now);

            List<Guid> taxonIds = _taxonomyService.GetTaxonIdsByTaxonomy(createTorrentDto.Genres, Constants.GenresTaxonomyName);
            if (taxonIds.Any())
            {
                torrentItem.Organizer.AddTaxa(Constants.GenresTaxonomyName, taxonIds.ToArray());
            }

            Image imageFileItem = _imageService.CreateImageWithNativeAPI(createTorrentDto.ImageDto, torrentItem.Id);
            if (imageFileItem != null)
            {
                // This is how we relate an item
                torrentItem.CreateRelation(imageFileItem, "ImageFile");
            }

            Document torrentFileItem = _documentService.CreateDocumentNativeAPI(createTorrentDto.DocumentDto, torrentItem.Id);
            if (torrentFileItem != null)
            {
                // This is how we relate an item
                torrentItem.CreateRelation(torrentFileItem, "TorrentFile");
            }

            torrentItem.SetString("UrlName", $"{createTorrentDto.Title}{torrentItem.Id}");
            torrentItem.SetValue("Owner", ClaimsManager.GetCurrentIdentity().UserId);
            torrentItem.SetValue("PublicationDate", DateTime.UtcNow);

            torrentItem.SetWorkflowStatus(dynamicModuleManager.Provider.ApplicationName, "Draft");

            // Create a version and commit the transaction in order changes to be persisted to data store
            versionManager.CreateVersion(torrentItem, false);

            // We can now call the following to publish the item
            ILifecycleDataItem publishedTorrentItem = dynamicModuleManager.Lifecycle.Publish(torrentItem);

            // You need to set appropriate workflow status
            torrentItem.SetWorkflowStatus(dynamicModuleManager.Provider.ApplicationName, "Published");

            // Create a version and commit the transaction in order changes to be persisted to data store
            versionManager.CreateVersion(torrentItem, true);

            // Now the item is published and can be seen in the page

            // Commit the transaction in order for the items to be actually persisted to data store
            TransactionManager.CommitTransaction(transactionName);
        }
    }
}