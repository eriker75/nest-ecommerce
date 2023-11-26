import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity({
  name: 'wishlists',
})
export class WishlistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => ProductEntity)
  @JoinTable({
    name: 'wishlist_items',
    joinColumn: {
      name: 'wish_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: ProductEntity[];

  @ManyToOne(() => UserEntity)
  user: UserEntity;
}
