using DataAccess;
using DataAccess.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShantiesSongbookSite.Model;
using ShantiesSongbookSite.Services;
using System;
using System.Collections.Generic;

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
        public ActionResult<Shanty> Get(uint id)
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
        public ActionResult<Shanty> Get(string title)
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
