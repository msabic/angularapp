using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using MojProjekat.Persistence.Identity.Entities;
using MojProjekat.Persistence.Entities;
using MojProjekat.Persistence.Configurations;

namespace MojProjekat.Persistence
{
    /// <summary>
    ///     Primary class that is responsible for interacting with data as object.
    /// </summary>
    public class BackofficeDbContext : IdentityDbContext<UserEntity, RoleEntity, int, UserLoginEntity, UserRoleEntity, UserClaimEntity>
    {
        public DbSet<PregledEntity> Pregledi { get; set; }

        public DbSet<DijagnozaEntity> Dijagnoza { get; set; }
        public DbSet<ReceptEntity> Recepti { get; set; }

        /// <summary>
        ///     Constructor.
        /// </summary>
        public BackofficeDbContext() : base("DefaultConnection")
        {
            Configuration.LazyLoadingEnabled = false;

#if DEBUG
            Database.Log = sql => Trace.WriteLine(sql);
#endif
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>
        /// 
        /// </returns>
        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException error)
            {
                // Retrieve the error messages as a list of strings.
                var errorMessages = error.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);

                // Join the list to a single string.
                var fullErrorMessage = string.Join("; ", errorMessages);

                // Combine the original exception message with the new one.
                var exceptionMessage = string.Concat(error.Message, " The validation errors are: ", fullErrorMessage);

                // Throw a new DbEntityValidationException with the improved exception message.
                throw new DbEntityValidationException(exceptionMessage, error.EntityValidationErrors);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>
        /// 
        /// </returns>
        public override Task<int> SaveChangesAsync()
        {
            try
            {
                return base.SaveChangesAsync();
            }
            catch (DbEntityValidationException error)
            {
                // Retrieve the error messages as a list of strings.
                var errorMessages = error.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);

                // Join the list to a single string.
                var fullErrorMessage = string.Join("; ", errorMessages);

                // Combine the original exception message with the new one.
                var exceptionMessage = string.Concat(error.Message, " The validation errors are: ", fullErrorMessage);

                // Throw a new DbEntityValidationException with the improved exception message.
                throw new DbEntityValidationException(exceptionMessage, error.EntityValidationErrors);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cancellationToken">
        /// 
        /// </param>
        /// <returns>
        /// 
        /// </returns>
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            try
            {
                return base.SaveChangesAsync(cancellationToken);
            }
            catch (DbEntityValidationException error)
            {
                // Retrieve the error messages as a list of strings.
                var errorMessages = error.EntityValidationErrors.SelectMany(x => x.ValidationErrors).Select(x => x.ErrorMessage);

                // Join the list to a single string.
                var fullErrorMessage = string.Join("; ", errorMessages);

                // Combine the original exception message with the new one.
                var exceptionMessage = string.Concat(error.Message, " The validation errors are: ", fullErrorMessage);

                // Throw a new DbEntityValidationException with the improved exception message.
                throw new DbEntityValidationException(exceptionMessage, error.EntityValidationErrors);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="modelBuilder">
        /// 
        /// </param>
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<UserEntity>().ToTable("Users", "Identity");
            modelBuilder.Entity<UserRoleEntity>().ToTable("UserRoles", "Identity");
            modelBuilder.Entity<UserLoginEntity>().ToTable("UserLogins", "Identity");
            modelBuilder.Entity<UserClaimEntity>().ToTable("UserClaims", "Identity");
            modelBuilder.Entity<RoleEntity>().ToTable("Roles", "Identity");

            modelBuilder.Entity<UserEntity>().Property(p => p.Firstname).HasMaxLength(50);
            modelBuilder.Entity<UserEntity>().Property(p => p.Lastname).HasMaxLength(50);
            modelBuilder.Entity<UserEntity>().Property(p => p.IsDeleted);
            modelBuilder.Entity<UserEntity>().Property(p => p.IsChangePassword);
            modelBuilder.Entity<UserEntity>().Property(p => p.IsDoctor);
            modelBuilder.Entity<UserEntity>().Property(p => p.IsOsoblje);
            modelBuilder.Entity<UserEntity>().Property(p => p.IsPacijent);

            modelBuilder.Entity<UserRoleEntity>().HasRequired(a => a.Role).WithMany(c => c.Users).HasForeignKey(d => d.RoleId);
            modelBuilder.Entity<UserRoleEntity>().HasRequired(a => a.User).WithMany(c => c.Roles).HasForeignKey(d => d.UserId);

            modelBuilder.Configurations.Add(new ReceptEntityConfiguration());
            modelBuilder.Configurations.Add(new DijagnozaEntityConfiguration());
            modelBuilder.Configurations.Add(new PregledEntityConfiguration());

        }
    }
}