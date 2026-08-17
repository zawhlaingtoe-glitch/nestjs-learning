import { IsNumber, IsOptional,IsString } from "class-validator";

export class CreateProfileDto {
@IsNumber()
@IsOptional()
age!: number;

@IsString()
@IsOptional()
gender!: string;

@IsString()
@IsOptional()
bio!: string

}
