using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using Telerik.Sitefinity.Libraries.Model;

namespace SitefinityWebApp.TorrentTrackerServices.Contracts
{
    public interface IImageService
    {
        Image CreateImageWithNativeAPI(CreateImageDto createImageDto);
    }
}
