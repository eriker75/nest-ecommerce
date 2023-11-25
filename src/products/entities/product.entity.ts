import { BrandEntity } from 'src/brands/entities/brand.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ReviewEntity } from 'src/reviews/entities/review.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'products',
})
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  sku: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 12, scale: 2 })
  price: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  salePrice: number;

  @Column({ default: 0 })
  quantity: number;

  @Column({ default: false })
  featured: boolean;

  @Column({ type: 'text', array: true })
  images: string[];

  @ManyToOne(() => BrandEntity)
  brand: BrandEntity;

  @ManyToOne(() => CategoryEntity)
  category: CategoryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ReviewEntity, (review) => review.product)
  @JoinTable()
  reviews: ReviewEntity[];
}
