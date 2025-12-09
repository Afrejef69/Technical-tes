import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import User from '../entities/user.entity';
import CreateUserDto from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    const records = this.usersService.findAll();
    return records;
  }

  @Post()
  @ApiCreatedResponse({
    description: 'this endpoint is ceate new user',
    type: User,
  })
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
