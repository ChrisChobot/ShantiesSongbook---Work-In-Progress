using DataAccess;
using DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace ShantiesSongbookSite.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongbookController : ControllerBase
    {
        private readonly IShantiesRepository _repository;
        private readonly ILogger<SongbookController> _logger;

        public SongbookController(IShantiesRepository repository, ILogger<SongbookController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        [Route("getall")]
        public ActionResult<IEnumerable<Shanty>> GetAll()
        {
            try
            {
                return Ok(_repository.GetAll());
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all shanties: {e}");
                return BadRequest("Fail at getting shanties");
            }
        }

        [HttpGet]
        public ActionResult<Shanty> Get(uint id)
        {
            try
            {
                return Ok(_repository.Get(id));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get shanty: {e}");
                return BadRequest("Fail at getting shanty");
            }
        }

        [HttpGet]
        public ActionResult<Shanty> Get(string title)
        {
            try
            {
                return Ok(_repository.Get(title));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get shanty: {e}");
                return BadRequest("Fail at getting shanty");
            }
        }
    }
}
