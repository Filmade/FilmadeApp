using Filmade.Entites.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Filmade.Entites.Models;
using AutoMapper;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Filmade.Services;

namespace Filmade.Controllers;


[Route("api/v1/company")]
[ApiController]
[Authorize]
public class CompanyController : ControllerBase
{
    private readonly CompanyManager _companyManager;
    private readonly IMapper _mapper;
    public CompanyController(CompanyManager companyManager, IMapper mapper)
    {
        _companyManager = companyManager;
        _mapper = mapper;
    }


    [HttpPost("create")]
    public async Task<IActionResult> CreateCompany([FromBody] CompanyForCreationDto companyForCreation)
    {
        if (companyForCreation == null || !ModelState.IsValid)
            return BadRequest();

        var result = await _companyManager.CreateCompany(companyForCreation, User);
        
        
        if (!result.Succeeded)
            return BadRequest(new CompanyResponseDto() { IsSuccessful = false, Errors = result.Errors });
        
        return Created("", new CompanyResponseDto() { IsSuccessful = true, NewCompanyId = result.Company!.Id});
    }

    [HttpGet("getcompanies")]
    public async Task<IActionResult> GetCompanies()
    {
        var result = await _companyManager.GetCompanies(User);
        
        return Ok(_mapper.Map<BasicCompaniesResponseDto>(result));
    }

    
}