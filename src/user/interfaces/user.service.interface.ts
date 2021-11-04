import { DeleteResult, UpdateResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from './../dto/update-user.dto';

export interface UserServiceInterface {
  create(createUserDto: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult>;
  remove(id: number): Promise<DeleteResult>;
}
