import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';
import { PurchaseEntity } from './purchase.entity';

@Entity({
  name: 'purchase_items',
})
export class PurchaseItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => ProductEntity)
  product: ProductEntity;

  @Column()
  quantity: number;

  @Column()
  cost: number;

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.items)
  purchase: PurchaseEntity;
}
