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
        private readonly TorrentService _torrentService;
        private readonly TaxonomyService _taxonomyService;

        public CreateTorrentWidgetController()
        {
            _torrentService = new TorrentService();
            _taxonomyService = new TaxonomyService();
        }

        public ActionResult Index()
        {
            CreateTorrentWidgetModel model = CreateInitialTorrentWidgetModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Index(CreateTorrentWidgetModel model)
        {
            if (!ValidateModel(model))
            {
                // quickfix to populate genres when invalid data is passed on Add torrent
                var genres = _taxonomyService.GetTaxonNamesByTaxonomy(Constants.GenresTaxonomyName);
                model.Genres = genres;
                return View(model);
            }

            StringBuilder sb = new StringBuilder();
            try
            {
                CreateTorrentDto torrent = GetTorrentData(model);
                _torrentService.CreateTorrentWithPublish(torrent);

                sb.AppendLine(string.Format(Constants.CreateTorrentSuccessMessage, model.Title));
                ViewBag.SuccessMessage = sb.ToString();
            }
            catch (Exception exc)
            {
                sb.AppendLine(exc.Message);

                if (exc.InnerException != null)
                {
                    sb.AppendLine(exc.InnerException.Message);
                }

                ViewBag.ErrorMessage = sb.ToString();
            }

            return View(CreateInitialTorrentWidgetModel());
        }

        private CreateTorrentWidgetModel CreateInitialTorrentWidgetModel()
        {
            var genres = _taxonomyService.GetTaxonNamesByTaxonomy(Constants.GenresTaxonomyName);
            return new CreateTorrentWidgetModel()
            {
                Genres = genres
            };
        }

        private bool ValidateModel(CreateTorrentWidgetModel model)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }

            bool result = true;

            string imageFileExtension = Path.GetExtension(model.UserImageData.FileName).ToLower();
            if (!Constants.ValidImageFiles.Contains(imageFileExtension))
            {
                ModelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserImageData),
                    string.Format(Constants.InvalidFileFormatMessage, imageFileExtension, Constants.ImageText, string.Join("; ", Constants.ValidImageFiles)));

                result = false;
            }

            string documentFileExtension = Path.GetExtension(model.UserTorrentData.FileName).ToLower();
            if (!Constants.ValidDocumentFiles.Contains(documentFileExtension))
            {
                ModelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserTorrentData),
                    string.Format(Constants.InvalidFileFormatMessage, documentFileExtension, Constants.TorrentText, string.Join("; ", Constants.ValidDocumentFiles)));

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
                Title = model.Title,
                Description = model.Description,
                AdditionalInfo = model.AdditionalInfo,
                Genres = model.Genres,
                ImageDto = image,
                DocumentDto = document
            };
        }

        private CreateImageDto CreateImage(CreateTorrentWidgetModel model)
        {
            var imageDto = new CreateImageDto()
            {
                Id = Guid.NewGuid(),
                Title = Constants.TorrentImageTitle,
                Stream = model.UserImageData.InputStream,
                FileName = model.UserImageData.FileName,
                FileExtension = Path.GetExtension(model.UserImageData.FileName)
            };

            return imageDto;
        }

        private CreateDocumentDto CreateDocument(CreateTorrentWidgetModel model)
        {
            var documentDto = new CreateDocumentDto()
            {
                Id = Guid.NewGuid(),
                Title = Constants.TorrentFileTitle,
                Stream = model.UserTorrentData.InputStream,
                FileName = model.UserTorrentData.FileName,
                FileExtension = Path.GetExtension(model.UserTorrentData.FileName)
            };

            return documentDto;
        }
    }
}