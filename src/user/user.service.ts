import { DeleteResult, UpdateResult } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    let user: any = new User();
    user = { ...createUserDto };

    return await this.userRepository.create(user);
  }

  public async findAll(): Promise<User[]> {
    const result: User[] = await this.userRepository.findAll();
    return result;
  }

  public async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findByCondition({
      email: email,
    });
  }

  public async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.userRepository.update(id, updateUserDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.remove(id);
  }
}
