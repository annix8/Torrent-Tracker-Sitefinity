using System;
using System.IO;

namespace SitefinityWebApp.TorrentTrackerServices.Dtos
{
    public class CreateFileDtoBase
    {
        public Guid MasterId { get; set; }
        public string Title { get; set; }
        public Stream Stream { get; set; }
        public string FileName { get; set; }
        public string FileExtension { get; set; }
    }
}