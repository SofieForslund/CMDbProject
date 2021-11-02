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
            if (movie.Plot.Length < 50)
            {
                return "N/A";
            }
            else
            {
                return movie.Plot.Substring(0, 50);
            }
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
                                numberOfLikes = movieCmdb.numberOfLikes
                            };
                            TopList.Add(completeMovie);
                            break;
                    }
                } 
            }
        }
    } 
} 
