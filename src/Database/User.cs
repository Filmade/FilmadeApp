#nullable disable

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FIlmade.Database;


public class User
{
    [Key]
    public Guid Id { get; set; }
    public string Email { get; set; }
    public string HashedPassword { get; set; }
    public string Name { get; set; }
    public string SecondName { get; set; }
    public DateTime RegistrationDate { get; set; }
    public string Country { get; set; }
    public virtual IEnumerable<UserOrganization> UserOrganizations { get; set; }
}

public enum PhoneTypes
{
    Mobile = 0,
    Home = 1,
    Work = 2,
    Fax = 3,
    Other = 4
}