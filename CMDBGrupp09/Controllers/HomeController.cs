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
        string movieID = "tt1853728";
        public async Task<IActionResult> Index()
        {

            var movie = await repoOMDb.GetMovieAsync(movieID);
            var model = new HomeViewModel();
            //{
            //    Title = movie.Title,
            //    Plot = movie.Plot

            //};
            return View(model);

            //try
            //{
            //    var task2 = repoCMDb.GetMovieAsync(movieID);
            //    var task1 = repoOMDb.GetMovieAsync(movieID);

            //    await Task.WhenAll(task1, task2);

            //    var summary = await task1;
            //    var countries2 = await task2;

            //    var model = new HomeViewModel(summary);

            //    // hantera resultatet
            //    return View(model);
            //}
            //catch (System.Exception)
            //{
            //    var model = new HomeViewModel();
            //    ModelState.AddModelError(string.Empty, "Fick inte kontakt med Covidstatistiken, visar istället gårdagens siffror");
            //    return View(model);
            //    throw;
            //}
        }

    }
}
