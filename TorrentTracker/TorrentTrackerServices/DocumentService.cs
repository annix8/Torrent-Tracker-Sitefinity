using SitefinityWebApp.TorrentTrackerServices.Contracts;
using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Telerik.Sitefinity.Libraries.Model;
using Telerik.Sitefinity.Modules.Libraries;
using Telerik.Sitefinity.Workflow;

namespace SitefinityWebApp.TorrentTrackerServices
{
    public class DocumentService : IDocumentService
    {
        public Document CreateDocumentNativeAPI(CreateDocumentDto createDocumentDto, Guid torrentId)
        {
            LibrariesManager librariesManager = LibrariesManager.GetManager();
            Document document = librariesManager.GetDocuments().Where(d => d.Id == createDocumentDto.Id).FirstOrDefault();

            if (document == null)
            {
                //The document is created as master. The masterDocumentId is assigned to the master version.
                document = librariesManager.CreateDocument(createDocumentDto.Id);

                //Set the parent document library.
                DocumentLibrary documentLibrary = librariesManager.GetDocumentLibraries().SingleOrDefault();
                document.Parent = documentLibrary;

                //Set the properties of the document.
                string title = $"{createDocumentDto.Title}-{torrentId}";
                document.Title = title;
                document.DateCreated = DateTime.UtcNow;
                document.PublicationDate = DateTime.UtcNow;
                document.LastModified = DateTime.UtcNow;
                document.UrlName = Regex.Replace(title.ToLower(), @"[^\w\-\!\$\'\(\)\=\@\d_]+", "-");
                document.MediaFileUrlName = Regex.Replace(createDocumentDto.FileName.ToLower(), @"[^\w\-\!\$\'\(\)\=\@\d_]+", "-");

                //Upload the document file.
                librariesManager.Upload(document, createDocumentDto.Stream, createDocumentDto.FileExtension);

                //Recompiles and validates the url of the document.
                librariesManager.RecompileAndValidateUrls(document);

                //Save the changes.
                librariesManager.SaveChanges();

                //Publish the DocumentLibraries item. The live version acquires new ID.
                var bag = new Dictionary<string, string>();
                bag.Add("ContentType", typeof(Document).FullName);
                WorkflowManager.MessageWorkflow(createDocumentDto.Id, typeof(Document), null, "Publish", false, bag);
            }

            return document;
        }
    }
}