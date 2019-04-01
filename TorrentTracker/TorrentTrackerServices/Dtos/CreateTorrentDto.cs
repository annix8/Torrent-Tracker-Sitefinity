using System;

namespace SitefinityWebApp.TorrentTrackerServices.Dtos
{
    public class CreateTorrentDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AdditionalInfo { get; set; }
        public CreateImageDto ImageDto { get; set; }
        public CreateDocumentDto DocumentDto { get; set; }

    }
}