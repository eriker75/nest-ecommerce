import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSettingDto {
  @IsNotEmpty()
  @IsString()
  metaKey: string;

  @IsNotEmpty()
  metaValue: unknown;
}
