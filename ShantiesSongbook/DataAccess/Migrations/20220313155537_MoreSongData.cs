using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class MoreSongData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Chorus",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ChorusChords",
                table: "Shanties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "HaveChorusChords",
                table: "Shanties",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Chorus",
                table: "Shanties");

            migrationBuilder.DropColumn(
                name: "ChorusChords",
                table: "Shanties");

            migrationBuilder.DropColumn(
                name: "HaveChorusChords",
                table: "Shanties");
        }
    }
}
