using Newtonsoft.Json;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class PacijentDto
    {
        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("id")]
        public int Id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("ime")]
        public string Ime { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("prezime")]
        public string Prezime { get; set; }
    }
}