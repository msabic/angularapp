namespace MojProjekat.Migrations
{
    using Microsoft.AspNet.Identity;
    using Persistence;
    using Persistence.Constants;
    using Persistence.Identity.Entities;
    using Persistence.Identity.Managers;
    using Persistence.Identity.Stores;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Diagnostics;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MojProjekat.Persistence.BackofficeDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            AutomaticMigrationDataLossAllowed = false;
            MigrationsDirectory = @"Persistence\Migrations";
        }


        protected override void Seed(BackofficeDbContext context)
        {
            var userManager = new BackofficeUserManager(new BackofficeUserStore(context));
            var roleManager = new BackofficeRoleManager(new BackofficeRoleStore(context));

            var roles = new List<RoleEntity>
            {
                new RoleEntity { Name = UserRole.Administrator },
                new RoleEntity { Name = UserRole.HumanResources },
                new RoleEntity { Name = UserRole.Client }

            };


            var users = new List<UserEntity>
            {
                new UserEntity
                {
                    UserName = "usernametest",
                    Email = "test@mail.com",
                    EmailConfirmed = true,
                    Firstname = "Test",
                    Lastname = "User",
                    PasswordHash = new PasswordHasher().HashPassword("Test123!"),
                    IsDoctor=true
                },
                 new UserEntity
                {
                    UserName = "usernametest1",
                    Email = "test1@mail.com",
                    EmailConfirmed = true,
                    Firstname = "Test1",
                    Lastname = "User1",
                    PasswordHash = new PasswordHasher().HashPassword("Test123!"),
                    IsOsoblje=true
                },
                 new UserEntity
                {
                    UserName = "usernametest2",
                    Email = "test2@mail.com",
                    EmailConfirmed = true,
                    Firstname = "Test2",
                    Lastname = "User2",
                    PasswordHash = new PasswordHasher().HashPassword("Test123!"),
                    IsPacijent=true
                }
            };


            foreach (var user in users)
            {
                if (!context.Users.Any(a => a.UserName == user.UserName))
                {
                    var status = userManager.CreateAsync(user).Result;

                    if (!status.Succeeded)
                    {
                        Trace.WriteLine(string.Format(":: == :: Nije uspjelo kreiranje {0} korisnika", user.UserName));
                    }
                }
            }

            var adminRole = roleManager.FindByNameAsync(roles[0].Name).Result;

            if (adminRole != null)
            {
                var adminUser = userManager.FindByNameAsync(users[0].UserName).Result;

                var result = userManager.AddToRoleAsync(adminUser.Id, adminRole.Name).Result;

                if (!result.Succeeded)
                {
                    Trace.WriteLine(string.Format(":: == :: Nije uspjelo dodavanje role {0} za {1}", adminRole.Name, adminUser.UserName));
                }
            }
        }
    }
}
