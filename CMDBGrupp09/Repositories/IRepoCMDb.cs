using CMDBGrupp09.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Repositories
{
    public interface IRepoCMDb
    {
        Task<CMDbDto> GetMovieAsync(string movieID);
        Task<List<CMDbDto>> GetTop5MoviesAsync();
        
    }
}
