using DataAccess.Entities;
using ShantiesSongbookSite.Model;
using System.Collections.Generic;

namespace ShantiesSongbookSite.Services
{
    public interface IShantyService
    {
        Shanty Get(string title);
        Shanty Get(uint id);
        IEnumerable<BasicShantyInfo> GetAll();
    }
}