using Newtonsoft.Json;

namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ReceptiDto
    {
        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("id")]
        public int Id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("lijek")]
        public string Lijek { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("opisUpotrebe")]
        public string OpisUpotrebe { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("kolicina")]
        public int Kolicina { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("dijagnoza")]
        public string Dijagnoza { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("doktorId")]
        public int DoktorId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("doktorId")]
        public int PacijentId { get; set; }
    }
}