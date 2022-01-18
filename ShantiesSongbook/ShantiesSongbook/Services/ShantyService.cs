using AutoMapper;
using DataAccess;
using DataAccess.Entities;
using ShantiesSongbookSite.Model;
using System.Collections.Generic;

namespace ShantiesSongbookSite.Services
{
    public class ShantyService : IShantyService
    {
        private readonly IShantyRepository _repository;
        private readonly IMapper _mapper;

        public ShantyService(IShantyRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public IEnumerable<BasicShantyInfo> GetAll()
        {
            return _mapper.Map<IEnumerable<BasicShantyInfo>>(_repository.GetAll());
        }

        public Shanty Get(uint id)
        {
            return _repository.Get(id);
        }

        public Shanty Get(string title)
        {
            return _repository.Get(title);
        }
    }
}