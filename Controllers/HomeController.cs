using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MaterialUIMvcApp.Models;

namespace MaterialUIMvcApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Form()
    {
        return View(new UserModel());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Form(UserModel model)
    {
        if (ModelState.IsValid)
        {
            // Process the valid model
            // In a real application, you would save to database here
            ViewBag.Message = "Form submitted successfully!";
            return View("FormSuccess", model);
        }

        // If we got this far, something failed, redisplay form
        return View(model);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}