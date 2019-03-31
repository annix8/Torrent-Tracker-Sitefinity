/* ------------------------------------------------------------------------------
<auto-generated>
    This file was generated by Sitefinity CLI v1.0.0.4
</auto-generated>
------------------------------------------------------------------------------ */

using System.ComponentModel.DataAnnotations;
using System.Web;

namespace SitefinityWebApp.Mvc.Models
{
    public class CreateTorrentWidgetModel
	{
        [Required]
        [MinLength(5)]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        public string AdditionalInfo { get; set; }
        public string Genre { get; set; }
        [Required]
        [Display(Name = "Torrent image")]
        public HttpPostedFileBase UserImageData { get; set; }
        [Required]
        [Display(Name = "Torrent file")]
        public HttpPostedFileBase UserTorrentData { get; set; }
    }
}