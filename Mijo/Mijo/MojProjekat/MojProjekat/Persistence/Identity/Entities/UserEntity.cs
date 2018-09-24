using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using MojProjekat.Persistence.Identity.Managers;

namespace MojProjekat.Persistence.Identity.Entities
{
    /// <summary>
    /// 
    /// </summary>
    public class UserEntity : IdentityUser<int, UserLoginEntity, UserRoleEntity, UserClaimEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual string Firstname { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual string Lastname { get; set; }

        /// <summary>
        ///     da znam ako je promjenio sam sebi password prilikom prvog logina
        /// </summary>
        public virtual bool IsChangePassword { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual bool IsDeleted { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual bool IsDoctor { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual bool IsPacijent { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual bool IsOsoblje { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="manager">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(BackofficeUserManager manager)
        {
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);

            // custom claims here

            return userIdentity;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(BackofficeUserManager manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}