import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({
  name: 'carts',
})
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({
    type: 'enum',
    enum: ['active', 'pending', 'paid'],
  })
  status: 'active' | 'pending' | 'paid';

  @Column({ nullable: false })
  couponCode: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => ProductEntity)
  @JoinTable({
    name: 'cart_items',
    joinColumn: {
      name: 'cart_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  items: ProductEntity[];
}
