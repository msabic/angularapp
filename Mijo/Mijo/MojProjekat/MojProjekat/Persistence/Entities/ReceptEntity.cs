using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MojProjekat.Persistence.Entities
{
    /// <summary>
    /// 
    /// </summary>
    public class ReceptEntity
    {
        /// <summary>
        /// 
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Lijek { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string OpisUpotrebe { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int Kolicina { get; set; }
    }
}