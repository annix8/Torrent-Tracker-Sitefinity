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
        public Document CreateDocumentNativeAPI(CreateDocumentDto createDocumentDto)
        {
            //The document is created as master. The masterDocumentId is assigned to the master version.
            LibrariesManager librariesManager = LibrariesManager.GetManager();
            Guid documentId = Guid.NewGuid();
            Document document = document = librariesManager.CreateDocument(documentId);

            //Set the parent document library.
            DocumentLibrary documentLibrary = librariesManager.GetDocumentLibraries().SingleOrDefault();
            document.Parent = documentLibrary;

            //Set the properties of the document.
            document.Title = createDocumentDto.Title;
            document.DateCreated = DateTime.UtcNow;
            document.PublicationDate = DateTime.UtcNow;
            document.LastModified = DateTime.UtcNow;
            document.UrlName = Regex.Replace($"{createDocumentDto.Title}-{documentId}".ToLower(), @"[^\w\-\!\$\'\(\)\=\@\d_]+", "-");
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
            WorkflowManager.MessageWorkflow(documentId, typeof(Document), null, "Publish", false, bag);

            return document;
        }
    }
}