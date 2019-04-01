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
    public class ImageService
    {
        public Image CreateImageWithNativeAPI(CreateImageDto createImageDto)
        {
            LibrariesManager librariesManager = LibrariesManager.GetManager();
            Image image = librariesManager.GetImages().Where(i => i.Id == createImageDto.MasterId).FirstOrDefault();

            if (image == null)
            {
                //The album post is created as master. The masterImageId is assigned to the master version.
                image = librariesManager.CreateImage(createImageDto.MasterId);

                //Set the parent album.
                Album album = librariesManager.GetAlbums().SingleOrDefault();
                image.Parent = album;

                //Set the properties of the album post.
                image.Title = createImageDto.Title;
                image.DateCreated = DateTime.Now;
                image.PublicationDate = DateTime.Now;
                image.LastModified = DateTime.Now;
                image.UrlName = Regex.Replace(createImageDto.Title.ToLower(), @"[^\w\-\!\$\'\(\)\=\@\d_]+", "-");
                image.MediaFileUrlName = Regex.Replace(createImageDto.FileName.ToLower(), @"[^\w\-\!\$\'\(\)\=\@\d_]+", "-");

                //Upload the image file.
                // The imageExtension parameter must contain '.', for example '.jpeg'
                librariesManager.Upload(image, createImageDto.Stream, createImageDto.FileExtension);

                //Save the changes.
                librariesManager.SaveChanges();

                //Publish the Albums item. The live version acquires new ID.
                var bag = new Dictionary<string, string>();
                bag.Add("ContentType", typeof(Image).FullName);
                WorkflowManager.MessageWorkflow(createImageDto.MasterId, typeof(Image), null, "Publish", false, bag);
            }

            return image;
        }

        public Image GetImageNativeAPI(Guid masterImageId)
        {
            LibrariesManager librariesManager = LibrariesManager.GetManager();
            Image image = librariesManager.GetImages().Where(i => i.Id == masterImageId).FirstOrDefault();

            if (image != null)
            {
                image = librariesManager.Lifecycle.GetLive(image) as Image;
            }

            return image;
        }
    }
}