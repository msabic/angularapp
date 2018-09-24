using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using MojProjekat.Persistence.Identity.Entities;

namespace MojProjekat.Persistence.Identity.Managers
{
    /// <summary>
    /// 
    /// </summary>
    public class BackofficeSignInManager : SignInManager<UserEntity, int>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userManager">
        /// 
        /// </param>
        /// <param name="authenticationManager">
        /// 
        /// </param>
        public BackofficeSignInManager(BackofficeUserManager userManager, IAuthenticationManager authenticationManager) : base(userManager, authenticationManager)
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public override Task<ClaimsIdentity> CreateUserIdentityAsync(UserEntity user)
        {
            return user.GenerateUserIdentityAsync((BackofficeUserManager)UserManager);
        }
    }
}