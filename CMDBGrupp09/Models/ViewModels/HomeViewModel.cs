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
            var i = 0;



            foreach (var movie in movieListCmdb)
            {
                var i2 = 0;



                foreach (var movie2 in movieListOmdb)
                {
                    var query = movieListOmdb[i].Ratings
                    .Where(x => x.Source == "Internet Movie Database")
                    .FirstOrDefault();

                    if (movieListCmdb[i].imdbID == movieListOmdb[i2].imdbID)
                    {
                        TotalMovieDto movie3 = new TotalMovieDto()
                        {

                            Title = movieListOmdb[i2].Title,
                            Plot = movieListOmdb[i2].Plot,
                            Poster = movieListOmdb[i2].Poster,
                            ImdbID = movieListOmdb[i2].imdbID,
                            IMDbRating = query.Value,
                            numberOfDislikes = movieListCmdb[i].numberOfDislikes,
                            numberOfLikes = movieListCmdb[i].numberOfLikes,

                        }; 
                        TopList.Add(movie3);
                        
                    }
                    i2++;
                    
                }
                i++;

            }





        }
    } 
} 
