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
        public async Task<OMDbDto> GetMovieAsync(string movieID) 
        {
            var result = await apiClient.GetAsync<OMDbDto>($"{baseEndpoint}i={movieID}");
            return result;
        }


        public async Task<List<OMDbDto>>TopListMovies(List<CMDbDto> topList)
        {
            var tasks = new List<Task>();
            var movieDetails = new List<OMDbDto>();
            try
            {
                foreach (var movie in topList)
                {
                    tasks.Add(
                        Task.Run(
                            async () =>
                            {
                                var omdbresult = await GetMovieAsync(movie.imdbID);
                                movieDetails.Add(omdbresult);
                            }
                        )
                    );
                }
                await Task.WhenAll(tasks);
            }
            catch (Exception)
            {

            }
            return movieDetails;
        }
    }
}
