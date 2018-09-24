using Microsoft.AspNet.Identity.Owin;
using MojProjekat.Dto;
using MojProjekat.Models;
using MojProjekat.Persistence;
using MojProjekat.Persistence.Entities;
using MojProjekat.Persistence.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace MojProjekat.ApiControllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [RoutePrefix(RestApi.Url + "/" + RestApi.Version + "/" + RestApi.ZakljuciPregledEndpoint)]
    public class ZakljuciPregledController : ApiController
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
        public ZakljuciPregledController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ctx">
        /// 
        /// </param>
        public ZakljuciPregledController(BackofficeDbContext ctx)
        {
            DbContext = ctx;
        }

        [Authorize]
        [Route("spasi")]
        public async Task<IHttpActionResult> ZakljuciPregled(ZakljuciPregledDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var doktor = await DbContext.Users.FirstOrDefaultAsync(a => a.Id == model.DoktorId);

            var pacijent = await DbContext.Users.FirstOrDefaultAsync(a => a.Id == model.PacijentId);

            var pregled = new PregledEntity();
            var recepti = new ReceptEntity();
            var dijagnoza = new DijagnozaEntity();

            // dodaj recepr prvo
            recepti.Kolicina = model.Kolicina;
            recepti.Lijek = model.Lijek;
            recepti.OpisUpotrebe = model.Opis;

            try
            {
                DbContext.Recepti.Add(recepti);
                await DbContext.SaveChangesAsync();
            }
            catch (DbEntityValidationException error1)
            {
                return BadRequest(error1.Message);
            }
            catch (Exception errror)
            {
                return BadRequest(errror.Message);
            }

            // dodaj diajznogu
            dijagnoza.Dijagnoza = model.Dijagnoza;

            try
            {
                DbContext.Dijagnoza.Add(dijagnoza);
                await DbContext.SaveChangesAsync();
            }
            catch (DbEntityValidationException error1)
            {
                return BadRequest(error1.Message);
            }
            catch (Exception errror)
            {
                return BadRequest(errror.Message);
            }
            
            // nadji recept
            var receptDb = recepti.Id;
            var dijagnozaDb = dijagnoza.Id;

            // dodaj sada pregled
            pregled.PacijentId = pacijent.Id;
            pregled.DcotorId = doktor.Id;
            pregled.ReceptId = receptDb;
            pregled.DijagnozaId = dijagnozaDb;
            pregled.Opis = model.OpisPregleda;

            try
            {
                DbContext.Pregledi.Add(pregled);
                await DbContext.SaveChangesAsync();
                return Ok();
            }
            catch (DbEntityValidationException error1)
            {
                return BadRequest(error1.Message);

            }
            catch (Exception errror)
            {
                return BadRequest(errror.Message);
            }
        }
    }
}
