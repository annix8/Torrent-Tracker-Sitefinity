using SitefinityWebApp.Mvc.Models;
using System.Web.Mvc;

namespace SitefinityWebApp.TorrentTrackerServices.Contracts
{
    public interface IModelStateValidatorService
    {
        bool Validate(ModelStateDictionary modelState, CreateTorrentWidgetModel createTorrentWidgetModel);
    }
}
