using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MojProjekat.Persistence.Identity.Entities;
using MojProjekat.Persistence.Identity.Stores;

namespace MojProjekat.Persistence.Identity.Managers
{
    public class BackofficeRoleManager : RoleManager<RoleEntity, int>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="store">
        /// 
        /// </param>
        public BackofficeRoleManager(BackofficeRoleStore store) : base(store)
        {

        }
    }
}