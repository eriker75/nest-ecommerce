import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsDate,
  ValidateNested,
  IsUUID,
  IsInt,
  Min,
  IsDecimal,
} from 'class-validator';
import { ProviderEntity } from 'src/providers/entities/provider.entity';

export class CreatePurchaseDto {
  @IsNotEmpty()
  provider: ProviderEntity;

  @IsDate()
  date: Date;

  @ValidateNested({ each: true })
  @Type(() => PurchaseItemDto)
  items: PurchaseItemDto[];
}

export class PurchaseItemDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsDecimal()
  cost: number;
}
