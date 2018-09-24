using Newtonsoft.Json;
using System.Collections.Generic;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class DoktoriDtio
    {
        /// <summary>
        ///     Tax rules for client side calculation.
        /// </summary>
        [JsonProperty("doktori")]
        public IEnumerable<DoktorDto> Doktori { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DoktoriDtio()
        {
            Doktori = new List<DoktorDto>();
        }
    }
}