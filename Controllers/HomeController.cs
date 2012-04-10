using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace JQueryTests.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewData["Message"] = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Boo()
        {
            Thread.Sleep(2000);
            return Json(new {Message = "Hello! KoHb"}, JsonRequestBehavior.AllowGet);
        }
    }
}
