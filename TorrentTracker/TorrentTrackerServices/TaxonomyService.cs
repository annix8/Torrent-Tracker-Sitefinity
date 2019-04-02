using SitefinityWebApp.TorrentTrackerServices.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using Telerik.Sitefinity.Taxonomies;
using Telerik.Sitefinity.Taxonomies.Model;

namespace SitefinityWebApp.TorrentTrackerServices
{
    public class TaxonomyService : ITaxonomyService
    {
        public List<string> GetTaxonNamesByTaxonomy(string taxonomyName)
        {
            TaxonomyManager manager = TaxonomyManager.GetManager();

            var taxonomy = manager.GetTaxonomies<FlatTaxonomy>().Where(t => t.Name == taxonomyName).Single();

            return taxonomy.Taxa
                .Select(x => x.Name)
                .ToList();
        }

        public List<Guid> GetTaxonIdsByTaxonomy(List<string> taxonNames, string taxonomyName)
        {
            TaxonomyManager manager = TaxonomyManager.GetManager();

            var taxonomy = manager.GetTaxonomies<FlatTaxonomy>().Where(t => t.Name == taxonomyName).Single();

            return taxonomy.Taxa
                .Where(x => taxonNames.Contains(x.Name))
                .Select(x => x.Id)
                .ToList();
        }
    }
}