using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Models;
using MojProjekat.Persistence.Identity.Managers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MojProjekat.Controllers
{
    [RoutePrefix("account")]
    public class AccountController : Controller
    {
        private BackofficeUserManager userManager;
        private BackofficeSignInManager signInManager;

        /// <summary>
        /// 
        /// </summary>
        public BackofficeUserManager UserManager
        {
            get
            {
                return userManager ?? Request.GetOwinContext().GetUserManager<BackofficeUserManager>();
            }
            private set
            {
                userManager = value;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public BackofficeSignInManager SignInManager
        {
            get
            {
                return signInManager ?? Request.GetOwinContext().Get<BackofficeSignInManager>();
            }
            private set
            {
                signInManager = value;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public AccountController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userManager"></param>
        /// <param name="signInManager"></param>
        public AccountController(BackofficeUserManager userManager, BackofficeSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        [AllowAnonymous]
        [Route("login", Name = "LoginLink")]
        public ActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToRoute("HomeRouteLink");
            }

            var model = new LoginViewModel();
            

            return View("Login", model);
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        [Route("login-post", Name = "LoginPostbackLink")]
        public async Task<ActionResult> LoginPostback(LoginViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View("Login", model);
            }
            
            var user = await UserManager.FindByNameAsync(model.Username);

            if (user == null)
            {
                ModelState.AddModelError(model.Username, "Korisnik nije pronadjen");

                return View("Login", model);
            }
            
            var result = await SignInManager.PasswordSignInAsync(user.UserName, model.Password, isPersistent: true, shouldLockout: true);

            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToRoute("HomeRouteLink");
                case SignInStatus.LockedOut:
                    return RedirectToRoute("LockoutRouteLink");
                case SignInStatus.Failure:
                default:
                    ModelState.AddModelError("error", "Invalid error");
                    return View("Login", model);
            }
        }
    }
}