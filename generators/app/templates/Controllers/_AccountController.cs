using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApplication1.Models.AccountViewModels;

namespace WebApplication1.Controllers
{
    public class AccountController : Controller
    {
        public AccountController()
        {

        }

        [HttpGet]
		[AllowAnonymous]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                ModelState.AddModelError("", $"User {model.Email} does not exist!");
                return View();
            }
            else
            {
                return View();
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                ModelState.AddModelError("", $"User {model.Email} already exist!");
                return View();
            }
            else
            {
                return View();
            }
        }
    }
}
