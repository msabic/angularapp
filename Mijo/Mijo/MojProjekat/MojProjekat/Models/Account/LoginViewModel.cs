using System.ComponentModel.DataAnnotations;

namespace MojProjekat.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class LoginViewModel
    {
        /// <summary>
        /// 
        /// </summary>
        [Display(Name = "UserName")]
        public string Username { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}