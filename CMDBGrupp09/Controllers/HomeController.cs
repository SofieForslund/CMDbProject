using CMDBGrupp09.Models;
using CMDBGrupp09.Models.ViewModels;
using CMDBGrupp09.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Controllers
{
    public class HomeController : Controller
    {

        string movieID = "tt1853728";

        private IRepoCMDb repoCMDb;

        public HomeController(IRepoCMDb repoCMDb)
        {
            this.repoCMDb = repoCMDb;
        }
        private IRepoOMDb repoOMDb;

        public HomeController(IRepoOMDb repoOMDb)
        {
            this.repoOMDb = repoOMDb;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                var task1 = repoCMDb.GetTop5MoviesAsync();
                var task2 = repoOMDb.GetMovieAsync(movieID);

                await Task.WhenAll(task1, task2);


                var topList = await task1;
                var movie = await task2;


                var toplistModel = new HomeViewModel(topList);
                var movieModel = new HomeViewModel(movie);

                return View(toplistModel);
            }
            catch (System.Exception)
            {
                var model = new HomeViewModel();
                ModelState.AddModelError(string.Empty, "Går icke");
                return View(model);
                throw;
            }

        }

    }
}
