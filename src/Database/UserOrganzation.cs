#nullable disable

using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace FIlmade.Database;

public class UserOrganization
{
    [Key]
    public Guid UserOrganizationId { get; set; }
    public virtual User User { get; set; }
    public virtual Organization Organization { get; set; }
    public string Role { get; set; }
}