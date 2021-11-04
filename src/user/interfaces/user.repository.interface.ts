import { BaseInterfaceRepository } from 'src/helpers/repository/base.interface.repository';
import { User } from '../entities/user.entity';

export type UserRepositoryInterface = BaseInterfaceRepository<User>;
