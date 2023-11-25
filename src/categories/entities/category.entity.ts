import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({
  name: 'categories',
})
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('boolean', { default: false })
  featured: boolean;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
