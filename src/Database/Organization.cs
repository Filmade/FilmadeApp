#nullable disable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIlmade.Database;


public class Organization
{
    [Key]
    public Guid Id { get; set; }
    public string CompanyName { get; set; }
    public virtual IEnumerable<UserOrganization> Members { get; set; }
}