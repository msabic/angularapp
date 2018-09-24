namespace MojProjekat.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialcreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Dijagnoza",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Dijagnoza = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Pregledi",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Opis = c.String(nullable: false),
                        DcotorId = c.Int(nullable: false),
                        PacijentId = c.Int(nullable: false),
                        ReceptId = c.Int(nullable: false),
                        ZakljucenPregled = c.Boolean(nullable: false),
                        DijagnozaId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Dijagnoza", t => t.DijagnozaId, cascadeDelete: false)
                .ForeignKey("Identity.Users", t => t.DcotorId, cascadeDelete: false)
                .ForeignKey("Identity.Users", t => t.PacijentId, cascadeDelete: false)
                .ForeignKey("dbo.Recepti", t => t.ReceptId, cascadeDelete: true)
                .Index(t => t.DcotorId)
                .Index(t => t.PacijentId)
                .Index(t => t.ReceptId)
                .Index(t => t.DijagnozaId);
            
            CreateTable(
                "dbo.Recepti",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Lijek = c.String(nullable: false),
                        OpisUpotrebe = c.String(),
                        Kolicina = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("Identity.Users", "IsDoctor", c => c.Boolean(nullable: false));
            AddColumn("Identity.Users", "IsPacijent", c => c.Boolean(nullable: false));
            AddColumn("Identity.Users", "IsOsoblje", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Pregledi", "ReceptId", "dbo.Recepti");
            DropForeignKey("dbo.Pregledi", "PacijentId", "Identity.Users");
            DropForeignKey("dbo.Pregledi", "DcotorId", "Identity.Users");
            DropForeignKey("dbo.Pregledi", "DijagnozaId", "dbo.Dijagnoza");
            DropIndex("dbo.Pregledi", new[] { "DijagnozaId" });
            DropIndex("dbo.Pregledi", new[] { "ReceptId" });
            DropIndex("dbo.Pregledi", new[] { "PacijentId" });
            DropIndex("dbo.Pregledi", new[] { "DcotorId" });
            DropColumn("Identity.Users", "IsOsoblje");
            DropColumn("Identity.Users", "IsPacijent");
            DropColumn("Identity.Users", "IsDoctor");
            DropTable("dbo.Recepti");
            DropTable("dbo.Pregledi");
            DropTable("dbo.Dijagnoza");
        }
    }
}
