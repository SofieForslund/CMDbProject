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


        //public string Title { get; }
        //public string Plot { get; }
        //public string Poster { get; }
        //public string IMDbRating { get; }
        //public string ImdbID { get; }
        //public int numberOfLikes { get; set; }
        //public int numberOfDislikes { get; set; }

        //public TotalMovieDto CompleteMovie { get; set; }

        public List<TotalMovieDto> TopList { get; set; } = new List<TotalMovieDto>();



        public HomeViewModel()
        {
            
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
                        if (movieOmdb.Plot.Length < 10)
                        {
                            TotalMovieDto completeMovie = new TotalMovieDto()
                            {
                                Title = movieOmdb.Title,
                                Plot = movieOmdb.Plot,
                                Poster = movieOmdb.Poster,
                                ImdbID = movieOmdb.imdbID,
                                Shortplot = "N/A",
                                IMDbRating = query.Value,
                                numberOfDislikes = movieCmdb.numberOfDislikes,
                                numberOfLikes = movieCmdb.numberOfLikes
                            };
                            TopList.Add(completeMovie);
                            break;
                        }
                        else
                        {
                            TotalMovieDto completeMovie = new TotalMovieDto()
                            {
                                Title = movieOmdb.Title,
                                Plot = movieOmdb.Plot,
                                Poster = movieOmdb.Poster,
                                ImdbID = movieOmdb.imdbID,
                                Shortplot = movieOmdb.Plot.Substring(0,20),
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
} 
