import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/cars.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X6',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A6',
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'E220',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
  create(CreateCarDto: CreateCarDto) {
    this.cars.push({
      id: uuid(),
      ...CreateCarDto,
    });
    return CreateCarDto;
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
