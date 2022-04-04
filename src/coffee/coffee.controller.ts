import { Controller, Get, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll(): string {
    return 'hello test';
  }
  @Post()
  create(): string {
    return 'created successfully';
  }
}
