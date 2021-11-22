using DataAccess.Entities;
using System.Linq;

namespace DataAccess
{
    public class ShantiesSeeder
    {
        private readonly ShantiesContext _shantiesContext;

        public ShantiesSeeder(ShantiesContext shantiesContext)
        {
            _shantiesContext = shantiesContext;
        }

        public void Seed()
        {
            _shantiesContext.Database.EnsureCreated();

            if (!_shantiesContext.Shanties.Any())
            {
                /*   var file = Path.Combine(_hosting.ContentRootPath, "Data/DbSeed.json");
                   var json = File.ReadAllText(file);
                   var shanties = JsonSerializer.Deserialize<IEnumerable<Shanty>>(json);
                   _shantiesContext.Shanties.AddRange(shanties);*/
                _shantiesContext.Add(new Shanty() { Chords = " AA GG Cd", HaveChords = true, Text = "la la la la" });
              
                _shantiesContext.SaveChanges();
            }
        }
    }
}
