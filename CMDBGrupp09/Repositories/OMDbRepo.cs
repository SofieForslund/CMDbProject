using CMDBGrupp09.Infrastructure;
using CMDBGrupp09.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Repositories
{
    public class OMDbRepo : IRepoOMDb
    {
        private IApiClient apiClient;
        private readonly string baseEndpoint = "http://www.omdbapi.com/?apikey=750f36f6&";

        public OMDbRepo(IApiClient apiClient)
        {
            this.apiClient = apiClient;
 
        }
        public async Task<OMDbDto> GetMovieAsync(string movieID) => await apiClient.GetAsync<OMDbDto>($"{baseEndpoint}i={movieID}&plot=full");

        public async Task<List<OMDbDto>> TopListMovies(List<CMDbDto> topList)
        {
            var tasks = new List<Task<OMDbDto>>();
            var movieDetails = new List<OMDbDto>();
            try
            {
                foreach (var movie in topList)
                {
                    var task = GetMovieAsync(movie.imdbID);
                    tasks.Add(task);
                }
                await Task.WhenAll(tasks);
                for (int i = 0; i < tasks.Count; i++)
                {
                    movieDetails.Add(tasks[i].Result);
                }

            }
            catch (Exception)
            {

            }
            return movieDetails;
        }
    }
}
