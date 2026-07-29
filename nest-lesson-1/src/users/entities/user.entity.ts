import { Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsInt, IsNotEmpty, IsString, IsEmail, IsStrongPassword, Min, Max, IsPhoneNumber, validateOrReject } from "class-validator";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable: false})
  @IsString({message: "Must be string"})
  @IsNotEmpty({message: "Message is required!"})
  name!: string;

  @Column({nullable: false})
  @IsNotEmpty({message: "email is required!"})
  @IsEmail()
  email!: string;

  @Column({nullable: false})
  @IsStrongPassword()
  @IsNotEmpty({message: "Password must be required"})
  password! : string;

  @Column({nullable: false})
  @IsInt({message: "must be integer"})
  @IsNotEmpty({message: "age is required"})
  @Max(101,{message: "Not greater than the age of 100"})
  @Min(0,{message: "must be Positive integer!"})
  age!: number;

  @Column({nullable: true})
  @IsString({message: "Phone must be string!"})
  phone!: string;

  // 👇 The fix is applied here using TypeORM's built-in date decorators
  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt!: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async validate(){
    // 👇 Added 'await' because validateOrReject is asynchronous
    await validateOrReject(this);
  }
}