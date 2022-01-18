using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IShantyRepository
    {
        IEnumerable<Shanty> GetAll();
        Shanty Get(uint id);
        Shanty Get(string title);
    }
}
