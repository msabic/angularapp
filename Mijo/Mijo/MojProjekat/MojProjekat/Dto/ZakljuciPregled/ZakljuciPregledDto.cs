namespace MojProjekat.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ZakljuciPregledDto
    {
        /// <summary>
        /// 
        /// </summary>
        public string Dijagnoza { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Lijek { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Opis { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int Kolicina { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int DoktorId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int PacijentId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string OpisPregleda { get; set; }
    }
}