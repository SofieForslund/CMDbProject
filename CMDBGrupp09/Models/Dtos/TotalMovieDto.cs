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


    }
}
