using AutoMapper;
using DataAccess.Entities;
using ShantiesSongbookSite.Model;

namespace ShantiesSongbookSite
{
    public class ShantyProfile : Profile
    {
        public ShantyProfile()
        {
            CreateMap<Shanty, BasicShantyInfo>();
        }
    }
}
