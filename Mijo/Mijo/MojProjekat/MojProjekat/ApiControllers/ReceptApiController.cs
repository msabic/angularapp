using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Dto;
using MojProjekat.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data;
using System.Data.Entity;
using System.Web.Http.Cors;
using MojProjekat.Persistence.Entities;

namespace MojProjekat.ApiControllers
{
    // [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.ReceptiEndpoint)]
    public class ReceptApiController : ApiController
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
        public ReceptApiController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctx">
        /// 
        /// </param>
        public ReceptApiController(BackofficeDbContext ctx)
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
        [Route("recepti")]
        public async Task<IHttpActionResult> GetRecepti()
        {
            try
            {
                // serversko vrijeme
                var recepti = await DbContext.Recepti.ToListAsync();

                var model = new ReceptsDto();

                // ako nisu definisana, vrati prazno
                if (!recepti.Any())
                {
                    return NotFound();
                }

                model.Recepti = recepti.Select(a => new ReceptiDto
                {
                    Id = a.Id,
                    Kolicina = a.Kolicina,
                    Lijek = a.Lijek,
                    OpisUpotrebe = a.OpisUpotrebe
                }).ToList();

                return Ok(model);
            }
            catch (Exception err)
            {
                ModelState.AddModelError("error", err.Message);

                return BadRequest(ModelState);
            }
        }

        [HttpPost]
        [Route("spasi")]
        public async Task<IHttpActionResult> SaveRecepti(ReceptiDto recepti)
        {
            try
            {
                if (recepti == null)
                {
                    ModelState.AddModelError("error", "nema recepata");

                    return BadRequest(ModelState);
                }

                var receptiDb = new ReceptEntity();

                receptiDb.Lijek = recepti.Lijek;
                receptiDb.Kolicina = recepti.Kolicina;
                receptiDb.OpisUpotrebe = recepti.OpisUpotrebe;

                DbContext.Recepti.Add(receptiDb);

                await DbContext.SaveChangesAsync();

                var receptai = await DbContext.Recepti.FirstOrDefaultAsync(a => a.Id == 1);

                var model = new ReceptiDto
                {
                    Kolicina = receptai.Kolicina,
                    Lijek = receptai.Lijek,
                    OpisUpotrebe = receptai.OpisUpotrebe,
                    Id = receptai.Id
                };
                return Ok(model);
            }
            catch (Exception err)
            {
                ModelState.AddModelError("error", err.Message);

                return BadRequest(ModelState);
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
