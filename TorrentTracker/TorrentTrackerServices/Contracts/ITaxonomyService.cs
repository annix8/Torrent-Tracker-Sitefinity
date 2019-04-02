using System;
using System.Collections.Generic;

namespace SitefinityWebApp.TorrentTrackerServices.Contracts
{
    public interface ITaxonomyService
    {
        List<string> GetTaxonNamesByTaxonomy(string taxonomyName);
        List<Guid> GetTaxonIdsByTaxonomy(List<string> taxonNames, string taxonomyName);
    }
}
