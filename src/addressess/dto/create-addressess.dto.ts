import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
export class CreateAddressessDto {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  countryCode: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  state?: string;
}
