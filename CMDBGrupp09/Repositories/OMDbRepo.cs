using CMDBGrupp09.Infrastructure;
using CMDBGrupp09.Models;
using System;
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
            var result = await apiClient.GetAsync<OMDbDto>($"{baseEndpoint}/i={movieID}");
            return result;
        }

    }
}
