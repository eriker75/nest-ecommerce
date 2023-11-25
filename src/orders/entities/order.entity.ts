import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity({
  name: 'orders',
})
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderNumber: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({
    type: 'enum',
    enum: ['pending', 'paid', 'shipped', 'delivered'],
  })
  status: 'pending' | 'paid' | 'shipped' | 'delivered';

  @Column({ type: 'date' })
  orderDate: Date;

  @Column({ type: 'date', nullable: true })
  deliveredDate: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @ManyToMany(() => ProductEntity)
  @JoinTable({
    name: 'order_items',
    joinColumn: {
      name: 'order_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: ProductEntity[];
}
