import { Body, Controller, Post } from '@nestjs/common';
import { CreateVehicleService } from '../services';
import { CreateVehicleDTO } from '../dtos';

@Controller({ path: 'vehicle' })
export class CreateVehicleController {
  constructor(private readonly service: CreateVehicleService) {}

  @Post('/create')
  create(@Body() createVehicleDTO: CreateVehicleDTO) {
    return this.service.run(createVehicleDTO);
  }
}
