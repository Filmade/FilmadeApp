using AutoMapper;
using Filmade.Entites.DataTransferObjects;
using Filmade.Entites.Models;

namespace Filmade;


public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<UserForRegistrationDto, AppUser>()
            .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));

        CreateMap<CompanyForCreationDto, Company>()
            .ForMember(c => c.CompanyName, opt => opt.MapFrom(x => x.Address1))
            .ForMember(c => c.Address1, opt => opt.MapFrom(x => x.Address1))
            .ForMember(c => c.Address2, opt => { opt.MapFrom(x => x.Address2); opt.AllowNull(); })
            .ForMember(c => c.PostIndex, opt => opt.MapFrom(x => x.PostIndex));


        CreateMap<IEnumerable<Company>, BasicCompaniesResponseDto>()
            .ForMember(bc => bc.Companies, opt => opt.MapFrom(x => x.Select(x => new BasicCompanyDto() { Id = x.Id, CompanyName = x.CompanyName, MemberCount = x.Users.Count() })));

    }
}