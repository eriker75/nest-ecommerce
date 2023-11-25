import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({
  name: 'brands',
})
export class BrandEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('text', { array: true, default: [] })
  images: string[];

  @OneToMany(() => ProductEntity, (product) => product.brand)
  products: ProductEntity[];
}
