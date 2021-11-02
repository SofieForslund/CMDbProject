using CMDBGrupp09.Models;
using CMDBGrupp09.Models.ViewModels;
using CMDBGrupp09.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Controllers
{
    public class MovieController : Controller
    {
        string movieID = "tt1853728"; 

        private IRepoOMDb repoOMDb;
        private IRepoCMDb repoCMDb;

        public MovieController(IRepoOMDb repoOMDb, IRepoCMDb repoCMDb)
        {
            this.repoOMDb = repoOMDb;
            this.repoCMDb = repoCMDb;
        }

        public async Task<IActionResult> Index()
        {
            //dessa skapas inte här, utan kommer ifrån javascriften på nåt sätt
            var omdbMovie = await repoOMDb.GetMovieAsync(movieID);
            var cmdbMovie = await repoCMDb.GetMovieAsync(movieID);


            var model = new MovieViewModel(omdbMovie, cmdbMovie); //om det finns båda objekten
            //var model = new MovieViewModel(omdbMovie);          //om endast cmdb-objektet finns
            return View(model);
        }
    }
}
