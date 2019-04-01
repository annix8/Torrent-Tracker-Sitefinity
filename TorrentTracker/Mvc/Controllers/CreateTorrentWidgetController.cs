/* ------------------------------------------------------------------------------
<auto-generated>
    This file was generated by Sitefinity CLI v1.0.0.4
</auto-generated>
------------------------------------------------------------------------------ */

using SitefinityWebApp.Mvc.Models;
using SitefinityWebApp.TorrentTrackerServices;
using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Telerik.Sitefinity.Mvc;

namespace SitefinityWebApp.Mvc.Controllers
{
    [ControllerToolboxItem(Name = "CreateTorrentWidget_MVC", Title = "Create Torrent", SectionName = "Create torrents")]
    public class CreateTorrentWidgetController : Controller
    {
        private const string InvalidFileFormatMessage = "Invalid file format {0}. Valid formats are {1}";
        private readonly string[] _validImageFiles;
        private readonly string[] _validDocumentFiles;

        private readonly TorrentService _torrentService;

        public CreateTorrentWidgetController()
        {
            _validImageFiles = new string[] { ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".odg" };
            _validDocumentFiles = new string[] { ".torrent" };

            _torrentService = new TorrentService();
        }

        public ActionResult Index()
        {
            var model = new CreateTorrentWidgetModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(CreateTorrentWidgetModel model)
        {
            if (!ValidateModel(model))
            {
                return View(model);
            }

            StringBuilder sb = new StringBuilder();
            try
            {
                CreateTorrentDto torrent = GetTorrentData(model);
                _torrentService.CreateTorrentWithPublish(torrent);

                string torrentName = model.UserTorrentData.FileName;
                string imageName = model.UserImageData.FileName;
                sb.AppendLine($"Torrent created. Title: {model.Title}   Torrent name: {torrentName}");
            }
            catch (Exception exc)
            {
                sb.AppendLine(exc.Message);

                if (exc.InnerException != null)
                {
                    sb.AppendLine(exc.InnerException.Message);
                }
            }

            return Content(sb.ToString());
        }

        private bool ValidateModel(CreateTorrentWidgetModel model)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }

            bool result = true;

            string imageFileExtension = Path.GetExtension(model.UserImageData.FileName);
            if (!_validImageFiles.Contains(imageFileExtension))
            {
                ModelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserImageData),
                    string.Format(InvalidFileFormatMessage, imageFileExtension, string.Join("; ", _validImageFiles)));

                result = false;
            }

            string documentFileExtension = Path.GetExtension(model.UserTorrentData.FileName);
            if (!_validDocumentFiles.Contains(documentFileExtension))
            {
                ModelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserTorrentData),
                    string.Format(InvalidFileFormatMessage, documentFileExtension, string.Join("; ", _validDocumentFiles)));

                result = false;
            }

            return result;
        }

        private CreateTorrentDto GetTorrentData(CreateTorrentWidgetModel model)
        {
            CreateImageDto image = CreateImage(model);
            CreateDocumentDto document = CreateDocument(model);

            return new CreateTorrentDto
            {
                Id = Guid.NewGuid(),
                Title = model.Title,
                Description = model.Description,
                AdditionalInfo = model.AdditionalInfo,
                ImageDto = image,
                DocumentDto = document
            };
        }

        private CreateImageDto CreateImage(CreateTorrentWidgetModel model)
        {
            Guid imageGuid = Guid.NewGuid();
            string imageTitle = $"{model.Title}-{imageGuid}";
            var imageDto = new CreateImageDto()
            {
                MasterId = imageGuid,
                Title = imageTitle,
                Stream = model.UserImageData.InputStream,
                FileName = model.UserImageData.FileName,
                FileExtension = Path.GetExtension(model.UserImageData.FileName)
            };

            return imageDto;
        }

        private CreateDocumentDto CreateDocument(CreateTorrentWidgetModel model)
        {
            Guid documentGuid = Guid.NewGuid();
            string documentTitle = $"{model.Title}-{documentGuid}";
            var documentDto = new CreateDocumentDto()
            {
                MasterId = documentGuid,
                Title = documentTitle,
                Stream = model.UserTorrentData.InputStream,
                FileName = model.UserTorrentData.FileName,
                FileExtension = Path.GetExtension(model.UserTorrentData.FileName)
            };

            return documentDto;
        }
    }
}