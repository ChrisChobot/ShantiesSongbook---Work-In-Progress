using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Entities
{
    public class Shanty
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool HaveChords { get; set; }
        public string Chords { get; set; }
    }
}
