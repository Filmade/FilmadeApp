using FIlmade.Database;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);



//?
//? Services
//?

builder.Services.AddControllersWithViews();

DbContextOptions<DatabaseContext> _dbContext;

if(builder.Environment.IsDevelopment()) {
    builder.Services.AddDbContext<DatabaseContext>(x => x.UseSqlite(builder.Configuration.GetConnectionString("Db")));
    _dbContext = (new DbContextOptionsBuilder<DatabaseContext>().UseSqlite(builder.Configuration.GetConnectionString("Db"))).Options;
}

else {
    builder.Services.AddDbContext<DatabaseContext>(x => x.UseNpgsql(builder.Configuration.GetConnectionString("Db")));
    _dbContext = (new DbContextOptionsBuilder<DatabaseContext>().UseNpgsql(builder.Configuration.GetConnectionString("Db"))).Options;
}





var app = builder.Build();

//?
//? Preinit 
//?
using (var dbContext = new DatabaseContext(_dbContext))
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

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
