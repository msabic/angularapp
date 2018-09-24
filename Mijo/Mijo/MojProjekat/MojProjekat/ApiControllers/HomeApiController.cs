using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Persistence;
using System;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace MojProjekat.ApiControllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.HomeEndpoint)]
    public class HomeApiController : ApiController
    {
        private BackofficeDbContext ctx;

        /// <summary>
        /// 
        /// </summary>
        public BackofficeDbContext DbContext
        {
            get
            {
                return ctx ?? Request.GetOwinContext().Get<BackofficeDbContext>();
            }
            private set
            {
                ctx = value;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public HomeApiController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctx">
        /// 
        /// </param>
        public HomeApiController(BackofficeDbContext ctx)
        {
            DbContext = ctx;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>
        /// 
        /// </returns>
        [HttpGet]
        [Route("server-time")]
        public IHttpActionResult GetServerTime()
        {
            try
            {
                // serversko vrijeme
                var dateTime = DateTime.Now;

                var time = dateTime.ToString("HH:mm:ss");

                TimeSpan ts = TimeSpan.Parse(time);

                // sekunde ukupno
                var totalSeconds = Convert.ToInt32(ts.TotalSeconds);

                return Ok(totalSeconds);
            }
            catch (Exception err)
            {
                return InternalServerError();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="disposing">
        /// 
        /// </param>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (ctx != null)
                {
                    ctx.Dispose();
                    ctx = null;
                }
            }

            base.Dispose(disposing);
        }
    }
}
