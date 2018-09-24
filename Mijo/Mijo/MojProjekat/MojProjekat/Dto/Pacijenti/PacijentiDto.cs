using Newtonsoft.Json;
using System.Collections.Generic;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class PacijentiDto
    {
        /// <summary>
        ///     
        /// </summary>
        [JsonProperty("pacijenti")]
        public IEnumerable<PacijentDto> Pacijenti { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public PacijentiDto()
        {
            Pacijenti = new List<PacijentDto>();
        }
    }
}