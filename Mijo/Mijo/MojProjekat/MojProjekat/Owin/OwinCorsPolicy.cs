using Microsoft.Owin;
using Microsoft.Owin.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Cors;

namespace MojProjekat.Owin
{
    /// <summary>
    /// 
    /// </summary>
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false)]
    public class OwinCorsPolicy : Attribute, ICorsPolicyProvider
    {
        private CorsPolicy policy = new CorsPolicy();

        /// <summary>
        /// 
        /// </summary>
        public OwinCorsPolicy()
        {

            policy.Origins.Add("http://localhost");

            policy.AllowAnyMethod = true;
            policy.AllowAnyHeader = true;
            policy.AllowAnyOrigin = true;

            policy.Methods.Add("GET");
            policy.Methods.Add("POST");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public Task<CorsPolicy> GetCorsPolicyAsync(IOwinRequest request)
        {
            return Task.FromResult(policy);
        }
    }
}