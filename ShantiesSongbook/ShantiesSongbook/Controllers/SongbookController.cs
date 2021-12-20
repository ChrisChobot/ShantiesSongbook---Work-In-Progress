using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ShantiesSongbookSite.Controllers
{
    public class SongbookController : Controller
    {
        public SongbookController(IDutchRepository repository, ILogger<SongbookController> logger)
        {

        }
        
        // GET: SongbookController
        public ActionResult Index()
        {
            return View();
        }

        // GET: SongbookController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: SongbookController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: SongbookController/Create
        [HttpGet]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
        
    }
}
