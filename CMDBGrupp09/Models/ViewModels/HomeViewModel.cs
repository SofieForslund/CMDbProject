using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CMDBGrupp09.Models.ViewModels
{
    public class HomeViewModel
    {
        public string Title { get; }
        public string Plot { get; }
        public string Poster { get; }

        public HomeViewModel(OMDbDto omdb)
        {
            Title = omdb.Title;
            Plot = omdb.Plot;
            Poster = omdb.Poster;
            //var query = omdb.
            //.Where(x => x.imdbID == "tt1853728")
            //.FirstOrDefault();
            //TotalConfirmedSweden = query.TotalConfirmed;
        }



        private readonly string imdbID;

        public HomeViewModel(IEnumerable<CMDbDto> topList)
        {

            foreach (var movie in topList)
            {
                //OMDbRepo.GetMovieAsync(movie.imdbID);
            }
        }
    }
}
