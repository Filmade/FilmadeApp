using Microsoft.AspNetCore.Mvc;
using FIlmade.Database;
using FIlmade.Models;
using System.Text.RegularExpressions;

namespace FIlmade.Controllers;

[ApiController]
[Route("/api/v1/[controller]")]
public class UserController : ControllerBase
{
    private static Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", RegexOptions.Compiled);
    private readonly ILogger<UserController> _logger;
    private readonly DatabaseContext _db;
    public UserController(ILogger<UserController> logger, DatabaseContext db)
    {
        _logger = logger;
        _db = db;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateUser([FromForm]UserRegistrationForm from)
    {
        if(regex.IsMatch(from.Email)) {

        }
        return StatusCode(503);
    }

}
