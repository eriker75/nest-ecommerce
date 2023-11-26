import {
  ValidateNested,
  IsUUID,
  IsDate,
  IsDecimal,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class InvoiceItemDto {
  @IsUUID(4, { each: true })
  productId: string;

  @IsInt()
  quantity: number;

  @IsDecimal()
  price: number;
}
export class CreateInvoiceDto {
  @IsDate()
  invoiceDate: Date;

  @IsDate()
  paymentDate: Date;

  @ValidateNested()
  @Type(() => InvoiceItemDto)
  items: InvoiceItemDto[];
}
