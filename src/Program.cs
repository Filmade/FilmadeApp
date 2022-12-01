using Filmade.Databse;
using Filmade.Entites.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Filmade;
using Filmade.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpContextAccessor();

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<IdentityDbContext>(x => x.UseSqlite(builder.Configuration.GetConnectionString("AppConnectionString")));
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddScoped<JwtHandler>();
builder.Services.AddScoped<CompanyManager>();

builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 5;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireDigit = true;

    options.User.RequireUniqueEmail = true;

    options.ClaimsIdentity.UserIdClaimType = "UserId";
})
.AddEntityFrameworkStores<IdentityDbContext>();

var jwtSettings = builder.Configuration.GetSection("JwtSettings");


builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["validIssuer"],
        ValidAudience = jwtSettings["validAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(jwtSettings.GetSection("securityKey").Value))
    };
});


var app = builder.Build();


var _dbContext = (new DbContextOptionsBuilder<IdentityDbContext>().UseSqlite(builder.Configuration.GetConnectionString("AppConnectionString"))).Options;

using (var dbContext = new IdentityDbContext(_dbContext))
{
    if (dbContext.Database.EnsureCreated())
        app.Logger.LogInformation("Fresh start. Creating db tables ...");
}



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
