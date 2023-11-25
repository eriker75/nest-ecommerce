import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CartItemDto {
  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsOptional()
  @IsString()
  @MinLength(2)
  coupon?: string;
}

export class CreateCartDto {
  @IsNotEmpty()
  userId: string;

  @ValidateNested()
  @Type(() => CartItemDto)
  items: CartItemDto[];

  @IsOptional()
  @IsString()
  @MinLength(2)
  coupon?: string;
}
