import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id') //Si no es ni un uuid el propio pipe hace que ni llegue al servicio
  getcarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  @Post()
  createrCar(@Body() CreateCarDto: CreateCarDto) {
    return CreateCarDto;
  }

  @Patch('/:id')
  updateCar(@Param('id', ParseUUIDPipe) id: number, @Body() body: any) {
    return 'Car updated';
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return `Car with id ${id} deleted`;
  }
}
