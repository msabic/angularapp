using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Swashbuckle.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MojProjekat.App_Start
{
    public class WebApiConfig
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="config">
        /// 
        /// </param>
        public static void RegisterApi(HttpConfiguration config)
        {

            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            config.MapHttpAttributeRoutes();
            //var cors = new EnableCorsAttribute("*", "*", "*");
            //config.EnableCors(cors);
            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });
            
        }
    }
}