using MojProjekat.Persistence.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace MojProjekat.Persistence.Configurations
{
    /// <summary>
    /// 
    /// </summary>
    internal class PregledEntityConfiguration : EntityTypeConfiguration<PregledEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        public PregledEntityConfiguration()
        {
            ToTable("Pregledi");

            // Keys
            HasKey(k => k.Id);

            // Properties
            Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(p => p.Opis).IsRequired().IsUnicode(true);
            Property(p => p.ZakljucenPregled).IsRequired();

            // Relations
            HasRequired(r => r.Doctor).WithMany().HasForeignKey(r => r.DcotorId);
            HasRequired(r => r.Dijagnoza).WithMany().HasForeignKey(r => r.DijagnozaId);
            HasRequired(r => r.Pacijent).WithMany().HasForeignKey(r => r.PacijentId);
            HasRequired(r => r.Recept).WithMany().HasForeignKey(r => r.ReceptId);

        }
    }
}