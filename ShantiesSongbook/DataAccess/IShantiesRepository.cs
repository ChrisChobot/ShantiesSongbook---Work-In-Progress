using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IShantiesRepository
    {
        IEnumerable<Shanty> GetAll();
        IEnumerable<Shanty> Get(int id);
        IEnumerable<Shanty> Get(string title);
    }
}
