import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer"; // 👈 Correct source for @Type
import { CreateProfileDto } from '../../profile/dto/create-profile.dto';

export class CreateUserDto {

  @IsString({ message: "name is string" })
  @IsNotEmpty({ message: "name is required" })
  name!: string;

  @IsEmail({}, { message: "email is invalid!" })
  @IsNotEmpty({ message: "email is required" })
  email!: string;

  @IsString({ message: "password is string" })
  @IsNotEmpty({ message: "password is required" })
  @MinLength(6, { message: "password must be at least 6 characters long" })
  password!: string;

  @IsString({ message: "phone is string" })
  @IsOptional() // Usually phone numbers are optional during signup
  phone!: string;

  @IsObject({ message: "Profile must be an object" })
  @IsOptional() // Makes the profile optional when creating a user
  @ValidateNested() // Tells class-validator to validate the inner properties of CreateProfileDto
  @Type(() => CreateProfileDto) // Tells class-transformer to instantiate it as a CreateProfileDto object
  @ValidateNested()
  @IsNotEmpty()
  profile!: CreateProfileDto;
}