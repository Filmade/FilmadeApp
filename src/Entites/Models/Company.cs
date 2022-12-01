
using System.ComponentModel.DataAnnotations;

namespace Filmade.Entites.Models;


public class Company
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string? CompanyName { get; set; }
    
    [Required]
    public string? Address1 { get; set; }
    
    public string? Address2 { get; set; }
    
    [Required]
    public string? PostIndex { get; set; }
    
    [Required]
    public virtual IEnumerable<UserCompany>? Users { get; set; }
}