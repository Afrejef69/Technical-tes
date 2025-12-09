import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entities/user.entity';
import { Repository } from 'typeorm';
import CreateUserDto from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    const users = this.userRepository.find();
    return users;
  }

  async findOne(id: number) {
    const record = await this.userRepository.findOne({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return record;
  }

  create(new_user: CreateUserDto) {
    const user = this.userRepository.create(new_user);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
