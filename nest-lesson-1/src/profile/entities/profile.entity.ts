import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToOne } from "typeorm";
import { IsInt, IsString, IsOptional, Min, Max, validateOrReject } from "class-validator";
import { User } from '../../users/entities/user.entity';

@Entity("profile")
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  @IsOptional()
  @IsInt({ message: "Age must be an integer" })
  @Max(100, { message: "Age must not be greater than 100" })
  @Min(0, { message: "Age must be a positive integer!" })
  age!: number;

  @Column({ nullable: true })
  @IsOptional()
  @IsString({ message: "Bio must be a string" })
  bio!: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString({ message: "Gender must be a string" })
  gender!: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: "CASCADE" })
  user!: User;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}