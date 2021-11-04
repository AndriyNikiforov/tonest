import { BaseInterfaceRepository } from './base.interface.repository';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

export abstract class BaseAbstractRepository<T>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    const result = await this.entity.save(data);
    return result;
  }

  public async update(id: number, data: T | any): Promise<UpdateResult> {
    const result = await this.entity.update(id, data);
    return result;
  }

  public async findOneById(id: number): Promise<T> {
    const result = await this.entity.findOne(id);
    return result;
  }

  public async findByCondition(condition: any): Promise<T> {
    const result = await this.entity.findOne({ where: condition });
    return result;
  }

  public async findAll(): Promise<T[]> {
    const result = await this.entity.find();
    return result;
  }

  public async remove(id: number): Promise<DeleteResult> {
    const result = await this.entity.delete(id);
    return result;
  }
}
