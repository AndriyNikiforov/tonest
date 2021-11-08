import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import crypto from 'crypto';

@Entity()
export class User {
  private readonly salt = crypto.randomBytes(16).toString('hex');

  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  username: string;

  @Column({
    type: 'string',
    unique: true,
  })
  email: string;

  @Column({
    type: 'int',
    default: 0,
  })
  role_id: number;

  @Column({
    type: 'string',
  })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto
      .pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
  }

  validPassword(password: string, toCheckHash: string): boolean {
    const hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
    return hash === toCheckHash;
  }
}
