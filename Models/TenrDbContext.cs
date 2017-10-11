using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace TenrDemo.Models
{
    public class TenrDbContext : DbContext
    {
        public TenrDbContext(DbContextOptions<TenrDbContext> options) : base(options)
        {

        }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<ProductSubCategory> ProductSubCategories { get; set; }
        public DbSet<Product> Products { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //    optionsBuilder.UseSqlServer(_config["ConnectionStrings:TenrContextConnection"]);
        //}
    }

}
