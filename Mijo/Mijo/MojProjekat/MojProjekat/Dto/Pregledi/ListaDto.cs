using Newtonsoft.Json;
using System.Collections.Generic;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ListaDto
    {
        /// <summary>
        ///     
        /// </summary>
        [JsonProperty("pregledi")]
        public IEnumerable<PregledDto> Pregledi { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ListaDto()
        {
            Pregledi = new List<PregledDto>();
        }
    }
}