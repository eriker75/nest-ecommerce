import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({
  name: 'reviews',
})
export class ReviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  rating: number;

  @Column('text')
  comment: string;

  @Column()
  name: string;

  @ManyToOne(() => ProductEntity, (product) => product.reviews, {
    onDelete: 'CASCADE',
  })
  product: ProductEntity;

  @CreateDateColumn()
  createdAt: Date;
}
