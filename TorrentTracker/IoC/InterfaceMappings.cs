using Ninject.Modules;
using SitefinityWebApp.Facades;
using SitefinityWebApp.Facades.Contracts;
using SitefinityWebApp.TorrentTrackerServices;
using SitefinityWebApp.TorrentTrackerServices.Contracts;

namespace SitefinityWebApp.IoC
{
    public class InterfaceMappings : NinjectModule
    {
        /// <summary>
        /// Loads the module into the kernel.
        /// </summary>
        public override void Load()
        {
            Bind<ITorrentService>().To<TorrentService>();
            Bind<ITaxonomyService>().To<TaxonomyService>();
            Bind<IImageService>().To<ImageService>();
            Bind<IDocumentService>().To<DocumentService>();
            Bind<IModelStateValidatorService>().To<ModelStateValidatorService>();

            Bind<IPathFacade>().To<PathFacade>();
        }
    }
}