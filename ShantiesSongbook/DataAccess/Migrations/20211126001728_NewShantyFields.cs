using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class NewShantyFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MusicAuthor",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Performer",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TextAuthor",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MusicAuthor",
                table: "Shanties");

            migrationBuilder.DropColumn(
                name: "Performer",
                table: "Shanties");

            migrationBuilder.DropColumn(
                name: "TextAuthor",
                table: "Shanties");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Shanties");
        }
    }
}
