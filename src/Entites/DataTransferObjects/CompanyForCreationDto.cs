
using System.ComponentModel.DataAnnotations;

namespace Filmade.Entites.DataTransferObjects;


public class CompanyForCreationDto
{
    [Required(ErrorMessage = "Company Name is Required")]
    public string? CompanyName { get; set; }

    [Required(ErrorMessage = "Country is Required")]
    public string? Country { get; set; }

    [Required(ErrorMessage = "Address1 is Required")]
    public string? Address1 { get; set; }

    public string? Address2 { get; set; }
    
    [Required(ErrorMessage = "Post Index is Required")]
    public string? PostIndex { get; set; }
    
}
