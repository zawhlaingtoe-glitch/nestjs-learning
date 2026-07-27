import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

export class CreateCatDto {
  @IsInt({ message: 'Id must be Integer' })
  @IsOptional()
  id?: number;

  @IsString({ message: 'name must be string' })
  @IsNotEmpty({ message: 'name must be required' })
  name!: string;

  @IsInt({ message: 'Age must be integer' })
  @IsNotEmpty({ message: 'Age must be required' })
  @Min(0, { message: 'Age must be postive' })
  @Max(80, { message: 'Age must not be greate than 8-' })
  age!: number;

  @IsString({ message: 'Breed must be string ' })
  @IsNotEmpty({ message: 'Breed must be required' })
  breed!: string;
}
