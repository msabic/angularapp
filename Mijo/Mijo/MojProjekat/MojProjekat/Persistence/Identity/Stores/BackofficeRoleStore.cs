using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MojProjekat.Persistence.Identity.Entities;

namespace MojProjekat.Persistence.Identity.Stores
{
    public class BackofficeRoleStore : RoleStore<RoleEntity, int, UserRoleEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context">
        /// 
        /// </param>
        public BackofficeRoleStore(BackofficeDbContext context) : base(context)
        {

        }
    }
}