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

        public MovieController(IRepoOMDb repoOMDb)
        {
            this.repoOMDb = repoOMDb;
        }

        public async Task<IActionResult> Index()
        {
            var movie = await repoOMDb.GetMovieAsync(movieID);
            var model = new MovieViewModel(movie);
            return View(model);
        }
    }
}
