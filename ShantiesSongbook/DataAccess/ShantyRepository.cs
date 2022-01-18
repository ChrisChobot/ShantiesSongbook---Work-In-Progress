using DataAccess.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ShantyRepository : IShantyRepository
    {
        private readonly ShantiesContext _context;
        private readonly ILogger<ShantyRepository> _logger;

        public ShantyRepository(ShantiesContext context, ILogger<ShantyRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Shanty> GetAll()
        {
            try
            {
                return _context.Shanties
                               .OrderBy(shanty => shanty.Title)
                               .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all shanties: {e}");
                return null;
            }
           
        }

        public Shanty Get(uint id)
        {
            try
            {
                return _context.Shanties.FirstOrDefault(shanty => shanty.Id == id);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get single shanty: {e}");
                return null; 
            }
        }

        public Shanty Get(string title)
        {
            try
            {
                return _context.Shanties.FirstOrDefault(shanty => shanty.Title == title);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get single shanty: {e}");
                return null; 
            }
        }
    }
}
