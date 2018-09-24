using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.Cookies;
using MojProjekat.Persistence.Identity.Entities;
using MojProjekat.Persistence.Identity.Managers;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MojProjekat.Providers
{
    /// <summary>
    /// 
    /// </summary>
    public class BackofficeAuthenticationProvider : CookieAuthenticationProvider
    {
        /// <summary>
        ///     Constructor.
        /// </summary>
        public BackofficeAuthenticationProvider()
        {
            OnValidateIdentity = SecurityStampValidator.OnValidateIdentity<BackofficeUserManager, UserEntity, int>(TimeSpan.FromMinutes(30), UserIdentityCallback, UserIdCallback);
            OnApplyRedirect = (context) => ValidateRedirectCallback(context);
        }

        /// <summary>
        ///     User identity callback.
        /// </summary>
        /// <param name="userManager">
        ///     User manager.
        /// </param>
        /// <param name="user">
        ///     User.
        /// </param>
        /// <returns>
        ///     User identity claims.
        /// </returns>
        private async Task<ClaimsIdentity> UserIdentityCallback(BackofficeUserManager userManager, UserEntity user)
        {
            return await userManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
        }

        /// <summary>
        ///     User id callback.
        /// </summary>
        /// <param name="user">
        ///     User.
        /// </param>
        /// <returns>
        ///     User id.
        /// </returns>
        private int UserIdCallback(ClaimsIdentity user)
        {
            return user.GetUserId<int>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context">
        /// 
        /// </param>
        private void ValidateRedirectCallback(CookieApplyRedirectContext context)
        {
            //TODO Provjeriti ovo, slucaj kada nije u roli admin, da ga vodi na ovaj url
            if (context.Response.StatusCode == 401)
            {
                var urlHelper = new UrlHelper(HttpContext.Current.Request.RequestContext);

                context.Response.Redirect(urlHelper.RouteUrl("Login"));
            }
        }
    }
}