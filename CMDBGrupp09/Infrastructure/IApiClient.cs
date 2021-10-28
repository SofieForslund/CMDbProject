using CMDBGrupp09.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Infrastructure
{
    public interface IApiClient
    {
        Task<T> GetAsync<T>(string endpoint);

    }
}
