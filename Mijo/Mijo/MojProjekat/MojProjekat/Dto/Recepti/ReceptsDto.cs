using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ReceptsDto
    {
        /// <summary>
        ///     Tax rules for client side calculation.
        /// </summary>
        [JsonProperty("recepti")]
        public IEnumerable<ReceptiDto> Recepti { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ReceptsDto()
        {
            Recepti = new List<ReceptiDto>();
        }
    }
}