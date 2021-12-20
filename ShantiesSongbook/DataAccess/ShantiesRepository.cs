using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ShantiesRepository : IShantiesRepository
    {
        public IEnumerable<Shanty> Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Shanty> Get(string title)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Shanty> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
