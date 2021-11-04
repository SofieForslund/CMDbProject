using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Models
{
    public class TotalMovieDto
    {



        public string Title { get; set; }
        public string Plot { get; set; }
        public string Shortplot { get; set; }
        public string Poster { get; set; }
        public string IMDbRating { get; set; }
        public string ImdbID { get; set; }
        public int numberOfLikes { get; set; }
        public int numberOfDislikes { get; set; }
        public int Year { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Language { get; set; }
        public List<RatingDto> Ratings { get; set; }
        public string Actors { get; set; }
        public string cmdbInfo { get; set; }

    }
}
