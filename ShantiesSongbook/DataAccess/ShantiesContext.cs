using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using DataAccess.Entities;

namespace DataAccess
{
    public class ShantiesContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public ShantiesContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Shanty> Shanties { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder contextOptionsBuilder)
        {
            base.OnConfiguring(contextOptionsBuilder);
            contextOptionsBuilder.UseSqlServer(_configuration["ConnectionStrings:ShantiesDb"]);
        }
    }
}
