import { validateOrReject, IsString, IsInt, Max, Min } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, length: 255 })
  @IsString({ message: 'must be string!' })
  name!: string;

  @Column({ nullable: false })
  @IsInt({ message: 'must be integer' })
  @Max(100, { message: 'Must be less than 100' })
  @Min(0, { message: 'Must be positive' })
  age!: number;

  @Column()
  @IsString({ message: 'must be string!' })
  breed!: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
