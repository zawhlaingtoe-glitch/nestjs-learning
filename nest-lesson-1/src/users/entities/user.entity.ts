import { Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { IsInt, IsNotEmpty, IsString, IsEmail, IsStrongPassword, Min, Max, validateOrReject } from "class-validator";
import { Profile } from "../../profile/entities/profile.entity";
import * as bcrypt from 'bcrypt'; // 👈 Don't forget to import bcrypt

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  @IsString({ message: "Must be string" })
  @IsNotEmpty({ message: "Name is required!" })
  name!: string;

  @Column({ nullable: false, unique: true })
  @IsNotEmpty({ message: "Email is required!" })
  @IsEmail({}, { message: "Must be a valid email address" })
  email!: string;

  @Column({ nullable: false })
  @IsStrongPassword({}, { message: "Password is not strong enough" })
  @IsNotEmpty({ message: "Password is required" })
  password!: string;

  @Column({ nullable: false })
  @IsInt({ message: "Must be an integer" })
  @IsNotEmpty({ message: "Age is required" })
  @Max(100, { message: "Not greater than the age of 100" })
  @Min(0, { message: "Must be a positive integer!" })
  age!: number;

  @Column({ nullable: true })
  @IsString({ message: "Phone must be string!" })
  phone!: string;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true, nullable: true , onDelete: 'CASCADE'})
  @JoinColumn({ name: 'profile_id' })
  profile!: Profile;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt!: Date;

  @BeforeInsert()
  
  async hashPassword() {
    if (this.password && !this.password.startsWith('$2b$')) { // Basic check to avoid double hashing if already hashed
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  @BeforeUpdate()
   async hashPasswordOnUpdate(){
    if (this.password && !this.password.startsWith('2b$')){
      const salt : string = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password,salt)
    }
   }
  async validate() {
    await validateOrReject(this);
  }
}