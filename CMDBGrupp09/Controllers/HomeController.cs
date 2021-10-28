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
        
        private IRepoOMDb repoOMDb;
        private IRepoCMDb repoCMDb;

        public HomeController(IRepoOMDb repoOMDb, IRepoCMDb repoCMDb)
        {

            this.repoOMDb = repoOMDb;
            this.repoCMDb = repoCMDb;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                var topListCmdb = await repoCMDb.GetTop5MoviesAsync(); 
                var omdbList = await repoOMDb.TopListMovies(topListCmdb); 



                var model = new HomeViewModel(omdbList, topListCmdb);
                return View(model);

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

