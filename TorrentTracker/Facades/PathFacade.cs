using SitefinityWebApp.Facades.Contracts;
using System.IO;

namespace SitefinityWebApp.Facades
{
    public class PathFacade : IPathFacade
    {
        public string GetExtension(string fileName)
        {
            return Path.GetExtension(fileName);
        }
    }
}