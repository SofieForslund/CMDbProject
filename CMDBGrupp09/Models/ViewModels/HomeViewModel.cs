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
        //[DisplayFormat(DataFormatString = "{0:N0} st")]
        //[DisplayName("Totalt bekräftade fall")]
        public string Title { get; }

        //[DisplayFormat(DataFormatString = "{0:N0} st")]
        //[DisplayName("Totalt bekräftade fall i Sverige")]
        public string Plot { get; }

        public HomeViewModel(OMDbDto omdb)
        {
            Title = omdb.Title;
            Plot = omdb.Plot;
            //var query = omdb.
            //.Where(x => x.imdbID == "tt1853728")
            //.FirstOrDefault();

            //TotalConfirmedSweden = query.TotalConfirmed;


        }
        public HomeViewModel()
        {

        }
    }
}
