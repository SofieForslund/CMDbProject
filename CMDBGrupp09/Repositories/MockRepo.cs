using CMDBGrupp09.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CMDBGrupp09.Repositories
{
    public class MockRepo //: IRepoOMDb
    {
        public async Task<OMDbDto> GetMovieAsync(string movieID)
        {
            await Task.Delay(0);
            return GetTestData<OMDbDto>("Django.json");
            
        }
        private readonly string basePath;

        public MockRepo(IWebHostEnvironment environment)
        {
            basePath = $@"{environment.ContentRootPath}\Mock\";
        }

        private T GetTestData<T>(string testfile)
        {
            var path = $"{basePath}{testfile}";
            string data = File.ReadAllText(path);
            return JsonConvert.DeserializeObject<T>(data);
        }
    }
}
