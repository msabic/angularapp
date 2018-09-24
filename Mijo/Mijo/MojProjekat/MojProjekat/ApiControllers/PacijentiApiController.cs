using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Dto;
using MojProjekat.Persistence;
using MojProjekat.Persistence.Entities;
using MojProjekat.Persistence.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace MojProjekat.ApiControllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.PacijentiEndpoint)]
    public class PacijentiApiController : ApiController
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
        public PacijentiApiController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctx">
        /// 
        /// </param>
        public PacijentiApiController(BackofficeDbContext ctx)
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
        [Route("pacijent")]
        public async Task<IHttpActionResult> GetDoktore()
        {
            try
            {
                var pacijenti = await DbContext.Users.Where(a => a.IsPacijent).ToListAsync();

                var model = new PacijentiDto();

                if (!pacijenti.Any())
                {
                    return NotFound();
                }

                model.Pacijenti = pacijenti.Select(a => new PacijentDto
                {
                    Id = a.Id,
                    Ime = a.Firstname,
                    Prezime = a.Lastname
                }).ToList();

                return Ok(model);
            }
            catch (Exception err)
            {
                ModelState.AddModelError("error", err.Message);

                return BadRequest(ModelState);
            }
        }


        [HttpGet]
        [Route("findById/{nameId:int}")]
        public async Task<IHttpActionResult> findById(int nameId)
        {
            try
            {
                var pacijent = await DbContext.Users.FirstOrDefaultAsync(a => a.Id == nameId);



                if (pacijent == null)
                {
                    return NotFound();
                }

                var model = new PacijentDto()
                {
                    Id = pacijent.Id,
                    Ime = pacijent.Firstname,
                    Prezime = pacijent.Lastname
                };

                return Ok(model);
            }
            catch (Exception err)
            {
                ModelState.AddModelError("error", err.Message);

                return BadRequest(ModelState);
            }
        }

        [HttpGet]
        [Route("byName/{ime}/{prezime}")]
        public async Task<IHttpActionResult> findByName(string ime, string prezime)
        {
            try
            {

                var model = new ListaDto();
                var pregledi = new List<PregledEntity>();
                var pacijenti = new List<UserEntity>();

                if (ime == "undefined" && prezime == "undefined")
                {
                    pacijenti = await DbContext.Users.Where(a => a.IsPacijent).ToListAsync();
                } else if(string.IsNullOrWhiteSpace(prezime) || prezime == "undefined")
                {
                    pacijenti = await DbContext.Users.Where(a => a.IsPacijent && a.Firstname.Contains(ime)).ToListAsync();
                }
                else
                { 
                    pacijenti = await DbContext.Users.Where(a => a.IsPacijent && a.Firstname.Contains(ime) && a.Lastname.Contains(prezime)).ToListAsync();
                }

                if (!pacijenti.Any())
                {
                    return Ok(model);
                }

                foreach (var item in pacijenti)
                {
                    pregledi = await DbContext.Pregledi
                       .Include(x => x.Dijagnoza)
                       .Include(x => x.Recept)
                       .Include(x => x.Pacijent)
                       .Where(a => a.PacijentId == item.Id)
                       .ToListAsync();
                }

                if (!pregledi.Any())
                {
                    return Ok(model);
                }

                model.Pregledi = pregledi.Select(a => new PregledDto
                {
                    Id = a.Id,
                    Dijagnoza = a.Dijagnoza.Dijagnoza,
                    Kolicina = a.Recept.Kolicina,
                    Lijek = a.Recept.Lijek,
                    Opis = a.Opis,
                    ImePrezimePacijenta = a.Pacijent.Firstname + " " + a.Pacijent.Lastname
                }).ToList();

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
