namespace Filmade.Entites.DataTransferObjects;


public class CompanyResponseDto
{
    public bool IsSuccessful { get; set; }
    public Guid NewCompanyId { get; set; }
    public IEnumerable<string>? Errors { get; set; }
}