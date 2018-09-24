using MojProjekat.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace MojProjekat.Persistence.Configurations
{
    /// <summary>
    /// 
    /// </summary>
    internal class ReceptEntityConfiguration : EntityTypeConfiguration<ReceptEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        public ReceptEntityConfiguration()
        {
            ToTable("Recepti");

            // Keys
            HasKey(k => k.Id);

            // Properties
            Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(p => p.Lijek).IsRequired().IsUnicode(true);
            Property(p => p.OpisUpotrebe).IsUnicode(true);
            Property(p => p.Kolicina).IsRequired();
            
        }
    }
}