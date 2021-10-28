using CMDBGrupp09.Infrastructure;
using CMDBGrupp09.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Repositories
{
    public class CMDbRepo : IRepoCMDb
    {
        private IApiClient apiClient;
        private readonly string baseEndpoint = "https://grupp9.dsvkurs.miun.se/api";

        public CMDbRepo(IApiClient apiClient)
        {
            this.apiClient = apiClient;
        }
        public async Task<CMDbDto> GetMovieAsync(string movieID) => await apiClient.GetAsync<CMDbDto>($"{baseEndpoint}/Movie/{movieID}");

        public async Task<List<CMDbDto>> GetTop5MoviesAsync() => await apiClient.GetAsync<List<CMDbDto>>($"{baseEndpoint}/Toplist?sort=desc&count=5&type=popularity");
    }
}
