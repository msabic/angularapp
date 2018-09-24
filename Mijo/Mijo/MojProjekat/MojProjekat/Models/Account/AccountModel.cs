using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MojProjekat.Models
{
    public class AccountModel
    {
        /// <summary>
        /// 
        /// </summary>
        public string Username { get; set; }
        public int Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public bool IsDoctor { get; set; }
        public bool IsPacijent { get; set; }
        public bool IsOsoblje { get; set; }
    }
}