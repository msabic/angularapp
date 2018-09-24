using System;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.Identity;
using MojProjekat.Persistence.Identity.Managers;
using Microsoft.Owin.Security.Cookies;
using MojProjekat.Persistence;
using MojProjekat.Persistence.Identity.Stores;
using MojProjekat.Persistence.Identity.Entities;
using Microsoft.Owin.Cors;
using MojProjekat.Providers;
using MojProjekat.App_Start;
using System.Web.Http;
using MojProjekat.Owin;
using Microsoft.Owin.Security.OAuth;

[assembly: OwinStartup(typeof(MojProjekat.Startup))]

namespace MojProjekat
{
    /// <summary>
    /// 
    /// </summary>
    public class Startup
    {
        public static OAuthBearerAuthenticationOptions OAuthBearerOptions { get; private set; }
        public static string PublicClientId = "self";
        /// <summary>
        /// 
        /// </summary>
        public BackofficeDbContext GetContext()
        {
            return new BackofficeDbContext();
        }

        /// <summary>
        /// 
        /// </summary>
        //public BackofficeEmailService GetEmailService()
        //{
        //    return new BackofficeEmailService();
        //}

        /// <summary>
        /// 
        /// </summary>
        /// <param name="options">
        /// 
        /// </param>
        /// <param name="context">
        /// 
        /// </param>
        public BackofficeUserManager GetUserManager(IdentityFactoryOptions<BackofficeUserManager> options, IOwinContext context)
        {
            var manager = new BackofficeUserManager(new BackofficeUserStore(context.Get<BackofficeDbContext>()));

            manager.UserValidator = new UserValidator<UserEntity, int>(manager)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = true
            };

            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = false,
                RequireDigit = false,
                RequireLowercase = false,
                RequireUppercase = false
            };

            manager.UserLockoutEnabledByDefault = true;
            manager.DefaultAccountLockoutTimeSpan = TimeSpan.FromMinutes(5);
            manager.MaxFailedAccessAttemptsBeforeLockout = 10;

            var dataProtectionProvider = options.DataProtectionProvider;

            if (dataProtectionProvider != null)
            {
                manager.UserTokenProvider = new DataProtectorTokenProvider<UserEntity, int>(dataProtectionProvider.Create("ASP.NET Identity"))
                {
                    TokenLifespan = TimeSpan.FromDays(2)
                };
            }

            return manager;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="options">
        /// 
        /// </param>
        /// <param name="context">
        /// 
        /// </param>
        public BackofficeRoleManager GetRoleManager(IdentityFactoryOptions<BackofficeRoleManager> options, IOwinContext context)
        {
            var manager = new BackofficeRoleManager(new BackofficeRoleStore(context.Get<BackofficeDbContext>()));

            return manager;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="options">
        /// 
        /// </param>
        /// <param name="context">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public BackofficeSignInManager GetSignInManager(IdentityFactoryOptions<BackofficeSignInManager> options, IOwinContext context)
        {
            var userManager = new BackofficeUserManager(new BackofficeUserStore(context.Get<BackofficeDbContext>()));

            var manager = new BackofficeSignInManager(userManager, context.Authentication);

            return manager;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>
        /// 
        /// </returns>
        public CookieAuthenticationOptions GetCookieAuthentificationOptions()
        {
            var options = new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/account/login"),
                ExpireTimeSpan = TimeSpan.FromHours(12),
                Provider = new BackofficeAuthenticationProvider()
            };

            return options;
        }
        public OAuthAuthorizationServerOptions GetOAuthAuthorizationServerOptions()
        {
            var options = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/token"),
             //   Provider = new ApplicationOAuthProvider(PublicClientId),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true
            };

            return options;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="app">
        /// 
        /// </param>
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext(() => GetContext());
            //  app.CreatePerOwinContext(() => GetEmailService());
            app.CreatePerOwinContext((IdentityFactoryOptions<BackofficeUserManager> options, IOwinContext context) => GetUserManager(options, context));
            app.CreatePerOwinContext((IdentityFactoryOptions<BackofficeRoleManager> options, IOwinContext context) => GetRoleManager(options, context));
            app.CreatePerOwinContext((IdentityFactoryOptions<BackofficeSignInManager> options, IOwinContext context) => GetSignInManager(options, context));
            // mora biti prije drugih postavki (Cors je za webapi ovdje)
            app.UseCors(new CorsOptions
            {
                PolicyProvider = new OwinCorsPolicy()
            });
       //     OAuthBearerOptions = new OAuthBearerAuthenticationOptions();

            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {

                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/Token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new ApplicationOAuthProvider(PublicClientId),
                AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin")// see post
              
            };

            //     app.UseCors(CorsOptions.AllowAll);
            //    app.UseCookieAuthentication(GetCookieAuthentificationOptions());
            app.UseOAuthBearerTokens(OAuthServerOptions);
         //   app.UseOAuthBearerAuthentication(OAuthBearerOptions);

            
        }
    }
}
