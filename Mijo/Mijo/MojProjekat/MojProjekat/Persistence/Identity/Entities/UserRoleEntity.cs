using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MojProjekat.Persistence.Identity.Entities
{
    public class UserRoleEntity : IdentityUserRole<int>
    {
        /// <summary>
        /// 
        /// </summary>
        public virtual UserEntity User { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual RoleEntity Role { get; set; }
    }
}