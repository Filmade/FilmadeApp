using Filmade.Entites.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Filmade.Entites.Models;
using AutoMapper;
using System.IdentityModel.Tokens.Jwt;

namespace Filmade.Controllers;


[Route("api/v1/accounts")]
[ApiController]
public class AccountsController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;
    private readonly JwtHandler _jwtHandler;
    public AccountsController(UserManager<AppUser> userManager, JwtHandler jwtHandler, IMapper mapper)
    {
        _userManager = userManager;
        _mapper = mapper;
        _jwtHandler = jwtHandler;
    }
    [HttpPost("registration")]
    public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
    {
        if (userForRegistration == null || !ModelState.IsValid)
            return BadRequest();

        var user = _mapper.Map<AppUser>(userForRegistration);
        var result = await _userManager.CreateAsync(user, userForRegistration.Password);
        if (!result.Succeeded)
        {
            var errors = result.Errors.Select(e => e.Code);

            return BadRequest(new RegistrationResponseDto { Errors = errors });
        }

        return StatusCode(201);
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] UserForAuthenticationDto userForAuthentication)
    {
        var user = await _userManager.FindByNameAsync(userForAuthentication.Email);
        if (user == null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.Password))
            return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
        var signingCredentials = _jwtHandler.GetSigningCredentials();
        var claims = _jwtHandler.GetClaims(user);
        var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
        var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        
        Response.Cookies.Append("Authentication", $"Bearer {token}", new CookieOptions() { HttpOnly = true /* Expires = new DateTimeOffset(DateTime.Now, TimeSpan.FromDays(30)*/});
        return Ok(new AuthResponseDto { IsAuthSuccessful = true, Token = token });
    }
}