import { ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductEntity } from 'src/products/entities/product.entity';

export class CreateWishlistDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductEntity)
  productsIds: string[];
}
