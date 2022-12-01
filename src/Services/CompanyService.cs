
using Filmade.Databse;
using Filmade.Entites.Models;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using Filmade.Entites.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Filmade.Services;


public class CompanyManager
{
    private readonly IdentityDbContext _db;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;
    public CompanyManager(IdentityDbContext db, UserManager<AppUser> userManager, IMapper mapper)
    {
        _db = db;
        _userManager = userManager;
        _mapper = mapper;
    }

    public async Task<CompanyCreationResult> CreateCompany(CompanyForCreationDto companyForCreation, ClaimsPrincipal userClaims)
    {
        if (await _db.Companies.AnyAsync(x => x.CompanyName == companyForCreation.CompanyName))
            return CompanyCreationResult.CompanyWithTheSameNameAlreadyExsists();

        var company = await _db.Companies.AddAsync(_mapper.Map<Company>(companyForCreation));

        var user = await _userManager.GetUserAsync(userClaims);

        await _db.UserRole.AddAsync(new UserCompany() { Company = company.Entity, User = user, Role = "Director" });
        await _db.SaveChangesAsync();

        return CompanyCreationResult.Ok(company.Entity);
    }

    public async Task<IEnumerable<Company>> GetCompanies(ClaimsPrincipal user)
    {
        var a = user.FindFirstValue("UserId");
        var user1 = await _userManager.FindByIdAsync(a);
        return user1.UserInCompany.Select(x => x.Company); 
    }
}





public class CompanyCreationResult
{
    public Company? Company { get; }
    public bool Succeeded { get; }
    public IEnumerable<string>? Errors { get; }

    private CompanyCreationResult(bool isSuccessful, Company? company, IEnumerable<string>? errors)
    {
        Company = company;
        Succeeded = isSuccessful;
        Errors = errors;
    }

    public static CompanyCreationResult Ok(Company company) => new CompanyCreationResult(true, company, null);

    public static CompanyCreationResult Failed(IEnumerable<string> errors) => new CompanyCreationResult(false, null, errors);

    public static CompanyCreationResult CompanyWithTheSameNameAlreadyExsists() => Failed(new[] { "NotUniqueName" });

}