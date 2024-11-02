﻿using tnine.Core.Shared.Dto;

namespace tnine.Application.Shared.Authorization.IApplicationUserService.Dto
{
    public class GetUserWithRoleForViewDto : EntityDto<long>
    {
        public string UserName { get; set; }
        public string RoleName { get; set; }
    }
}
