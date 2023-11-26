import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateProviderDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: string;
}
