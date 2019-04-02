using SitefinityWebApp.TorrentTrackerServices.Dtos;

namespace SitefinityWebApp.TorrentTrackerServices.Contracts
{
    public interface ITorrentService
    {
        void CreateTorrentWithPublish(CreateTorrentDto createTorrentDto);
    }
}
