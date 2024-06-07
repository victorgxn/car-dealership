import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/cars.interface';

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
}
