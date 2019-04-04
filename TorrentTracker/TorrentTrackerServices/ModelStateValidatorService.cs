using SitefinityWebApp.Facades.Contracts;
using SitefinityWebApp.Mvc.Models;
using SitefinityWebApp.TorrentTrackerServices.Contracts;
using System.Linq;
using System.Web.Mvc;

namespace SitefinityWebApp.TorrentTrackerServices
{
    public class ModelStateValidatorService : IModelStateValidatorService
    {
        private readonly IPathFacade _pathFacade;

        public ModelStateValidatorService(IPathFacade pathFacade)
        {
            _pathFacade = pathFacade;
        }

        public bool Validate(ModelStateDictionary modelState, CreateTorrentWidgetModel createTorrentWidgetModel)
        {
            if (!modelState.IsValid)
            {
                return false;
            }

            bool result = true;

            string imageFileExtension = _pathFacade.GetExtension(createTorrentWidgetModel.UserImageData.FileName).ToLower();
            if (!Constants.ValidImageFiles.Contains(imageFileExtension))
            {
                modelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserImageData),
                    string.Format(Constants.InvalidFileFormatMessage, imageFileExtension, Constants.ImageText, string.Join("; ", Constants.ValidImageFiles)));

                result = false;
            }

            string documentFileExtension = _pathFacade.GetExtension(createTorrentWidgetModel.UserTorrentData.FileName).ToLower();
            if (!Constants.ValidDocumentFiles.Contains(documentFileExtension))
            {
                modelState.AddModelError(
                    nameof(CreateTorrentWidgetModel.UserTorrentData),
                    string.Format(Constants.InvalidFileFormatMessage, documentFileExtension, Constants.TorrentText, string.Join("; ", Constants.ValidDocumentFiles)));

                result = false;
            }

            return result;
        }
    }
}