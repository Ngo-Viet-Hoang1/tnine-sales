﻿using tnine.Core.Shared.Dto;

namespace tnine.Application.Shared.IApplicationUserService.Dto
{
    public class CreateOrEditApplicationUserDto : EntityDto<long>
    {
        public string UserName { get; set; }
    }
}