using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MojProjekat.Persistence.Identity.Entities;

namespace MojProjekat.Persistence.Identity.Stores
{
    public class BackofficeUserStore : UserStore<UserEntity, RoleEntity, int, UserLoginEntity, UserRoleEntity, UserClaimEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context">
        /// 
        /// </param>
        public BackofficeUserStore(BackofficeDbContext context) : base(context)
        {

        }
    }
}