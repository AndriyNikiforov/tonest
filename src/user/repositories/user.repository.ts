import { BaseAbstractRepository } from 'src/helpers/repository/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
