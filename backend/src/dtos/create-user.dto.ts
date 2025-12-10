import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
  Min,
} from 'class-validator';

export default class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsInt()
  @Min(18, { message: 'El usuario debe ser mayor de edad (+18)' })
  age!: number;
}
