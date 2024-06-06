import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getcarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(+id);
  }

  @Post()
  createrCar(@Body() body: any) {
    return body;
  }

  @Patch('/:id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return 'Car updated';
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return `Car with id ${id} deleted`;
  }
}
