import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new BadRequestException('User already exists');
    }

    try {
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    try {
      const updatedUser = this.userRepository.merge(user, updateUserDto);
      return await this.userRepository.save(updatedUser);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    const user = await this.findOne(id);

    try {
      await this.userRepository.remove(user);
      return { message: `User with ID #${id} successfully deleted` };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to delete user');
    }
  }
}