using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Models.ViewModels
{
    public class MovieViewModel
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
        public int numberOfLikes { get; set; }
        public int numberOfDislikes { get; set; }
        public string cmdbInfo { get; set; }

        public MovieViewModel(OMDbDto omdb, CMDbDto cmdb)
        {
            Title = omdb.Title;
            Plot = omdb.Plot;
            Poster = omdb.Poster;
            imdbID = omdb.imdbID;
            Year = omdb.Year;
            Runtime = omdb.Runtime;
            Language = omdb.Language;
            Director = omdb.Director;
            Actors = omdb.Actors;
            Genre = omdb.Genre;
            Ratings = omdb.Ratings;
            numberOfDislikes = cmdb.numberOfDislikes;
            numberOfLikes = cmdb.numberOfLikes;
            cmdbInfo = "";
            
        }

        public MovieViewModel(OMDbDto omdb)
        {
            Title = omdb.Title;
            Plot = omdb.Plot;
            Poster = omdb.Poster;
            imdbID = omdb.imdbID;
            Year = omdb.Year;
            Runtime = omdb.Runtime;
            Language = omdb.Language;
            Director = omdb.Director;
            Actors = omdb.Actors;
            Genre = omdb.Genre;
            Ratings = omdb.Ratings;
            cmdbInfo = "Filmen är ännu inte betygsatt av en cineast!";

        }
    }
}
