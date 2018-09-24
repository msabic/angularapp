using MojProjekat.Persistence.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace MojProjekat.Persistence.Configurations
{
    /// <summary>
    /// 
    /// </summary>
    internal class DijagnozaEntityConfiguration: EntityTypeConfiguration<DijagnozaEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        public DijagnozaEntityConfiguration()
        {
            ToTable("Dijagnoza");

            // Keys
            HasKey(k => k.Id);

            // Properties
            Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(p => p.Dijagnoza).IsRequired().IsUnicode(true);
        }
    }
}