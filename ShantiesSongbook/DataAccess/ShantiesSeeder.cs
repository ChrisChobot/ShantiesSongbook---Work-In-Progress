using DataAccess.Entities;
using Newtonsoft.Json;
using System;
using System.IO;
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
               
                var filePath = @"~\..\..\..\output.json";

                if (File.Exists(filePath))
                {
                  /*  using (var streamReader = new StreamReader(filePath))
                    {
                        while(streamReader.ReadLine() != EndOfStreamException)
                        {
                            if (!string.IsNullOrEmpty(line))
                            {
                                result.Add(JsonConvert.DeserializeObject<ValueDTO>(line));
                            }
                        }
                    }
*/
                    using (JsonTextReader reader = new JsonTextReader(new StreamReader(filePath)))
                    {
                        reader.SupportMultipleContent = true;
                        JsonSerializer serializer = new JsonSerializer();
                        while (reader.Read())
                        {
                            var shanty = serializer.Deserialize<Shanty>(reader);
                            _shantiesContext.Shanties.Add(shanty);
                        }
                    }
                }
                else
                {
                    throw new Exception("First generate output.json by DataConverter!");
                }
              
                _shantiesContext.SaveChanges();
            }
        }
    }
}
