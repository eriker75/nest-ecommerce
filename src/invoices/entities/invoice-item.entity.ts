import { ProductEntity } from 'src/products/entities/product.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@Entity({
  name: 'invoice_items',
})
export class InvoiceItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProductEntity)
  product: ProductEntity;

  @ManyToOne(() => InvoiceEntity, (invoice) => invoice.items)
  invoice: InvoiceEntity;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;
}
