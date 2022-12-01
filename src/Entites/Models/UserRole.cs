
using System.ComponentModel.DataAnnotations;

namespace Filmade.Entites.Models;


public class UserCompany
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public virtual AppUser? User { get; set; }

    [Required]
    public DateTime LastUsedByUser { get; set; }

    [Required]
    public virtual Company? Company { get; set; }

    [Required]
    public string? Role { get; set; }
}