﻿using tnine.Core.Shared.Dtos;

namespace tnine.Application.Shared.ISizeService.Dto
{
    public class GetSizeForViewDto : EntityDto<long>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
