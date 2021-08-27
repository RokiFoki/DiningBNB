
using Microsoft.EntityFrameworkCore;

namespace DiningBNBWeb.DbModels;
public class DiningContext: DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();

        var connectionString = configuration.GetConnectionString("DiningDb");
        optionsBuilder.UseNpgsql(connectionString);
    }
}
