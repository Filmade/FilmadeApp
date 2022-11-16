
using System.ComponentModel.DataAnnotations;

namespace Filmade.Entites.DataTransferObjects;


public class UserForRegistrationDto
{
    [Required(ErrorMessage = "{{empty_first_name}}")]
    public string? FirstName { get; set; }
    
    [Required(ErrorMessage = "{{last_name}}")]
    public string? LastName { get; set; }

    [Required(ErrorMessage = "{{empty_email}}")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "{{empty_password}}")]
    public string? Password { get; set; }

    [Compare("Password", ErrorMessage = "{{notmatches_password}}")]
    public string? ConfirmPassword { get; set; }
}