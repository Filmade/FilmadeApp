using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace FIlmade.Models;

public class UserRegistrationForm
{
    [DataType(DataType.EmailAddress)]
    [Required]
    [NotNull]
    public string Email { get; set; }

    [DataType(DataType.EmailAddress)]
    [StringLength(60, MinimumLength = 3)]
    [Required]
    [NotNull]
    public string Password { get; set; }

    [StringLength(60, MinimumLength = 3)]
    [Required]
    [NotNull]
    public string FirstName { get; set; }
    [StringLength(60, MinimumLength = 3)]
    [Required]
    [NotNull]
    public string LastName { get; set; }
}