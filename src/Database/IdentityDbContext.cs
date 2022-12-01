using Filmade.Entites.Models;
using Microsoft.EntityFrameworkCore;

namespace Filmade.Databse;


public class IdentityDbContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext<AppUser>
{
    public IdentityDbContext(DbContextOptions options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }

    public virtual DbSet<Company> Companies { get; set; }
    public virtual DbSet<UserCompany> UserRole { get; set; }

}