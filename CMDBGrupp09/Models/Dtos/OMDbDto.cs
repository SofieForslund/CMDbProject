using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Models
{
    public class OMDbDto
    {
        public string Title { get; set; }
        public int Year { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Language { get; set; }
        public List<RatingDto> Ratings { get; set; }
        public string Actors { get; set; }
        public string imdbID { get; set; }
        public string Poster { get; set; }
        public string Plot { get; set; }
    }
}
