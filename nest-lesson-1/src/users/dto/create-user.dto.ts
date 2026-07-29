import { IsEmail,IsNotEmpty,IsString,MinLength } from "class-validator";

export class CreateUserDto {

    @IsString({message: "name is string"})
    @IsNotEmpty({message: "name is required"})
    name!: string;

    @IsEmail({},{ message: "emai is invalid!"})
    @IsNotEmpty({message: "email is required"})
    email!: string;
    @IsString({message: "passwoed is string"})
    @IsNotEmpty({message: "password is required"})
    @MinLength(6,{message: "password must be at least 6 characters long"})
    password!: string
    
    @IsString({message: "phone is string"})
    phone!: string
}
