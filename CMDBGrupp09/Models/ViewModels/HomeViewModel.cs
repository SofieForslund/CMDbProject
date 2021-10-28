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
        //public List<TotalMovieDto> Movies { get; set; }

        public string Title { get; }
        public string Plot { get; }
        public string Poster { get; }
        public string IMDbRating { get; }
        public string ImdbID { get; }
        public int numberOfLikes { get; set; }
        public int numberOfDislikes { get; set; }





        public HomeViewModel()
        {
            //Movies = 
        }
        public HomeViewModel(List<OMDbDto> movieListOmdb, List<CMDbDto> movieListCmdb)
        {
            var i = 0;

            foreach (var movie in movieListOmdb)
            {
                Title = movieListOmdb[i].Title;
                Plot = movieListOmdb[i].Plot;
                Poster = movieListOmdb[i].Poster;
                ImdbID = movieListOmdb[i].imdbID;
                IMDbRating = movieListOmdb[i].Ratings[0].Value;

                var query = movieListOmdb[i].Ratings
                .Where(x => x.Source == "Internet Movie Database")
                .FirstOrDefault();
                IMDbRating = query.Value;

                foreach (var movie2 in movieListCmdb)
                {
                    if (movieListCmdb[i].imdbID == ImdbID)
                    {
                        numberOfDislikes = movieListCmdb[i].numberOfDislikes;
                        numberOfLikes = movieListCmdb[i].numberOfLikes;
                    }
                }


            }


        }
    } 
} 
