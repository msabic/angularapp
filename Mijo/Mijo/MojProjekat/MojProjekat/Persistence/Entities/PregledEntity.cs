using MojProjekat.Persistence.Identity.Entities;

namespace MojProjekat.Persistence.Entities
{
    /// <summary>
    /// 
    /// </summary>
    public class PregledEntity
    {
        /// <summary>
        /// 
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Opis { get; set; }


        /// <summary>
        /// 
        /// </summary>
        public int DcotorId { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public virtual UserEntity Doctor { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int PacijentId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual UserEntity Pacijent { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int ReceptId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual ReceptEntity Recept { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool ZakljucenPregled { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int DijagnozaId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public virtual DijagnozaEntity Dijagnoza { get; set; }
    }
}