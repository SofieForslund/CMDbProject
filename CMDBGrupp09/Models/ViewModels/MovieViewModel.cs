using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Models.ViewModels
{
    public class MovieViewModel
    {
        public TotalMovieDto Movie { get; set; } = new TotalMovieDto();

        public string CheckCmdb(CMDbDto cmdb)
        {
            if (cmdb.numberOfLikes == 0 && cmdb.numberOfDislikes == 0)
            {
                return "Filmen är ännu inte betygsatt av en cineast!";
            }
            return "";
        }

        public string CreateShortPlot(OMDbDto movie)
        {
            if (movie.Plot.Length < 70)
            {
                return "N/A";
            }
            return movie.Plot.Substring(0, 70);
        }

        public MovieViewModel(OMDbDto movieOmdb, CMDbDto movieCmdb)
        {
            Movie = new TotalMovieDto()
            {
                Title = movieOmdb.Title,
                Plot = movieOmdb.Plot,
                Poster = movieOmdb.Poster,
                ImdbID = movieOmdb.imdbID,
                Shortplot = CreateShortPlot(movieOmdb),
                numberOfDislikes = movieCmdb.numberOfDislikes,
                numberOfLikes = movieCmdb.numberOfLikes,
                Director = movieOmdb.Director,
                Genre = movieOmdb.Genre,
                Year = movieOmdb.Year,
                Runtime = movieOmdb.Runtime,
                Language = movieOmdb.Language,
                Actors = movieOmdb.Actors,
                Ratings = movieOmdb.Ratings,
                cmdbInfo = CheckCmdb(movieCmdb)

            };
        }
        public MovieViewModel()
        {

        }
    }
}
