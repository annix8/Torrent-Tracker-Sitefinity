using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using Telerik.Sitefinity.Libraries.Model;

namespace SitefinityWebApp.TorrentTrackerServices.Contracts
{
    public interface IDocumentService
    {
        Document CreateDocumentNativeAPI(CreateDocumentDto createDocumentDto);
    }
}
