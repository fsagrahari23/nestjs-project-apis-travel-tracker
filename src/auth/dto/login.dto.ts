import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsString({ message: 'Password must be a string' }) // Ensures it's a string
  @MinLength(6, { message: 'Password must be at least 6 characters' }) // Ensures min length
  password: string;
}
//  data transfer object 