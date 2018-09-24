using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Dto;
using MojProjekat.Persistence;
using System;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace MojProjekat.ApiControllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.DoctorsEndpoint)]
    public class DoctorsApiController : ApiController
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
        public DoctorsApiController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctx">
        /// 
        /// </param>
        public DoctorsApiController(BackofficeDbContext ctx)
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
        [Route("doktori")]
        public async Task<IHttpActionResult> GetDoktore()
        {
            try
            {
                var doktors = await DbContext.Users.Where(a => a.IsDoctor).ToListAsync();

                var model = new DoktoriDtio();

                if (!doktors.Any())
                {
                    return NotFound();
                }

                model.Doktori = doktors.Select(a => new DoktorDto
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
        [Route("pregledi/{id:int}")]
        public async Task<IHttpActionResult> PreglediByDoctor(int id)
       {
            try
            {
                var pregledi = await DbContext.Pregledi
                    .Include(x => x.Dijagnoza)
                     .Include(x => x.Recept)
                      .Include(x => x.Pacijent)
                    .Where(a => a.DcotorId == id).ToListAsync();

                var model = new ListaDto();

                if (!pregledi.Any())
                {
                    return NotFound();
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
