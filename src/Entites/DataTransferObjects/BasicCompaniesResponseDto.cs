using Filmade.Entites.Models;

namespace Filmade.Entites.DataTransferObjects;


public class BasicCompaniesResponseDto
{
    public IEnumerable<BasicCompanyDto>? Companies { get; set; }
}


public class BasicCompanyDto
{
    public Guid Id { get; set; }
    public string? CompanyName { get; set; }
    public int MemberCount { get; set; }
}