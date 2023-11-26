import { IsString, Length } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @Length(2, 2)
  code: string;
}
