using DataAccess;
using DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShantiesSongbookSite.Model;
using ShantiesSongbookSite.Services;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ShantiesSongbookSite.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongbookController : ControllerBase
    {
        private readonly ILogger<SongbookController> _logger;
        private readonly IShantyService _shantyService;

        public SongbookController(ILogger<SongbookController> logger, IShantyService shantyService)
        {
            _logger = logger;
            _shantyService = shantyService;
        }

        [HttpGet]
        [Route("getall")]
        public ActionResult<IEnumerable<BasicShantyInfo>> GetAll()
        {
            try
            {
                return Ok(_shantyService.GetAll());
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get all shanties: {e}");
                return BadRequest("Fail at getting shanties");
            }
        }
        
        [HttpGet]
        [Route("getById/{id}")]
        public ActionResult<Shanty> GetById(uint id)
        {
            try
            {
                return Ok(_shantyService.Get(id));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get shanty: {e}");
                return BadRequest("Fail at getting shanty");
            }
        }

        [HttpGet]
        [Route("getByTitle/{title}")]
        public ActionResult<Shanty> GetByTitle(string title)
        {
            try
            {
                return Ok(_shantyService.Get(title));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get shanty: {e}");
                return BadRequest("Fail at getting shanty");
            }
        }
    }
}
