using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ShantiesSongbook.Data.Entities
{
    public class Shanty
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }
}
