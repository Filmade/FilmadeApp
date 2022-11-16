using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Filmade.Entites.Models;


public class AppUser : IdentityUser
{
    [Required]
    public string? FirstName { get; set; }

    [Required]
    public string? LastName { get; set; }

    [Required]
    public virtual IEnumerable<UserCompany>? UserInCompany { get; set; }
}