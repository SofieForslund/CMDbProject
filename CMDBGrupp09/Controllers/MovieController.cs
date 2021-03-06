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
        private IRepoOMDb repoOMDb;
        private IRepoCMDb repoCMDb;

        public MovieController(IRepoOMDb repoOMDb, IRepoCMDb repoCMDb)
        {
            this.repoOMDb = repoOMDb;
            this.repoCMDb = repoCMDb;
        }
        
        public async Task<IActionResult> Index(string id)
        {
            try
            {
                var omdbMovie = await repoOMDb.GetMovieAsync(id);
                try
                {
                    var cmdbMovie = await repoCMDb.GetMovieAsync(id);
                    var model = new MovieViewModel(omdbMovie, cmdbMovie);
                    return View(model);
                }
                catch (Exception)
                {//om filmen inte finns i cmdb än
                    CMDbDto cmdbMovie = new CMDbDto()
                    {
                        imdbID = id,
                        numberOfDislikes = 0,
                        numberOfLikes = 0
                    };
                    var model = new MovieViewModel(omdbMovie, cmdbMovie);
                    return View(model);
                }
            }
            catch (Exception)
            {
                var model = new MovieViewModel();
                ModelState.AddModelError(string.Empty, "Går icke");
                return View(model);
                throw;
            }
            

            


             
            
            
        }
    }
}
