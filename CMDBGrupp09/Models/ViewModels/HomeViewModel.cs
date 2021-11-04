using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using CMDBGrupp09.Repositories;

namespace CMDBGrupp09.Models.ViewModels
{
    public class HomeViewModel
    {
        public List<TotalMovieDto> TopList { get; set; } = new List<TotalMovieDto>();

        public HomeViewModel()
        {

        }

        public string CreateShortPlot(OMDbDto movie) 
        {
            if (movie.Plot.Length < 70)
            {
                return "N/A";
            }
            return movie.Plot.Substring(0, 70);
        }

        public HomeViewModel(List<OMDbDto> movieListOmdb, List<CMDbDto> movieListCmdb)
        {
            foreach (var movieCmdb in movieListCmdb)
            {
                foreach (var movieOmdb in movieListOmdb)
                {
                    var query = movieOmdb.Ratings
                    .Where(x => x.Source == "Internet Movie Database")
                    .FirstOrDefault();

                    if (movieCmdb.imdbID == movieOmdb.imdbID)
                    {
                            TotalMovieDto completeMovie = new TotalMovieDto()
                            {
                                Title = movieOmdb.Title,
                                Plot = movieOmdb.Plot,
                                Poster = movieOmdb.Poster,
                                ImdbID = movieOmdb.imdbID,
                                Shortplot = CreateShortPlot(movieOmdb),
                                IMDbRating = query.Value,
                                numberOfDislikes = movieCmdb.numberOfDislikes,
                                numberOfLikes = movieCmdb.numberOfLikes,
                                Director = movieOmdb.Director,
                                Genre = movieOmdb.Genre,
                                Year = movieOmdb.Year,
                                Runtime = movieOmdb.Runtime,
                                Language = movieOmdb.Language,
                                Actors = movieOmdb.Actors,
                                Ratings = movieOmdb.Ratings
                            };
                            TopList.Add(completeMovie);
                            break;
                    }
                } 
            }
        }
    } 
} 
