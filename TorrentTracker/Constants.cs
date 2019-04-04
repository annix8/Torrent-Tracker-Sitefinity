namespace SitefinityWebApp
{
    public static class Constants
    {
        public const string GenresTaxonomyName = "Genres";
        public const string InvalidFileFormatMessage = "Invalid file format {0} for file type {1}. Valid formats are {2}";
        public const string CreateTorrentSuccessMessage = "Torrent {0} successfully created.";
        public const string ImageText = "image";
        public const string TorrentText = "torrent";
        public const string SuccessMessageKey = "SuccessMessage";
        public const string ErrorMessageKey = "ErrorMessage";

        public const string TorrentImageTitle = "TorrentImage";
        public const string TorrentFileTitle = "TorrentFile";

        public static readonly string[] ValidImageFiles = new string[] { ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".odg" };
        public static readonly string[] ValidDocumentFiles = new string[] { ".torrent" };
    }
}