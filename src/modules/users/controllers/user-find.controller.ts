import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindUsersService } from '../services';
import { UserFilterDTO } from '../dtos/user-filter.dto';

@Controller({ path: 'user' })
export class FindUserController {
  constructor(private readonly service: FindUsersService) {}

  @Get('/:id')
  findById(@Param('id') userId: string) {
    return this.service.findById(userId);
  }

  @Get()
  findAll(@Query() filterDTO: UserFilterDTO) {
    return this.service.findByFilter(filterDTO);
  }
}
