import { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {
  create(data: T | any): Promise<T>;

  update(id: number, data: T | any): Promise<UpdateResult>;

  findOneById(id: number): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  remove(id: number): Promise<DeleteResult>;
}
