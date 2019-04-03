using SitefinityWebApp.Mvc.Models;
using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using System.IO;
using System.Web;

namespace SitefinityWebApp.TorrentTrackerServices
{
    public static class DtoCreator
    {
        public static CreateTorrentDto CreateTorrent(CreateTorrentWidgetModel model)
        {
            CreateImageDto image = CreateImage(model);
            CreateDocumentDto document = CreateDocument(model);

            return new CreateTorrentDto
            {
                Title = model.Title,
                Description = model.Description,
                AdditionalInfo = model.AdditionalInfo,
                Genres = model.Genres,
                ImageDto = image,
                DocumentDto = document
            };
        }

        public static CreateImageDto CreateImage(CreateTorrentWidgetModel model)
        {
            var imageDto = CreateFileDto<CreateImageDto>(model, Constants.TorrentImageTitle, x => x.UserImageData);

            return imageDto;
        }

        public static CreateDocumentDto CreateDocument(CreateTorrentWidgetModel model)
        {
            var documentDto = CreateFileDto<CreateDocumentDto>(model, Constants.TorrentFileTitle, x => x.UserTorrentData);

            return documentDto;
        }

        private static TFileDto CreateFileDto<TFileDto>(CreateTorrentWidgetModel model,
            string fileTitle,
            Func<CreateTorrentWidgetModel, HttpPostedFileBase> fileDataFunc)
            where TFileDto : CreateFileDtoBase, new()
        {
            HttpPostedFileBase fileData = fileDataFunc(model);
            var fileDto = new TFileDto
            {
                Title = $"{fileTitle}-{model.Title}",
                Stream = fileData.InputStream,
                FileName = fileData.FileName,
                FileExtension = Path.GetExtension(fileData.FileName)
            };

            return fileDto;
        }
    }
}