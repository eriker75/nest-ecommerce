import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'coupons',
})
export class CouponEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column('decimal', { default: 0 })
  discountAmount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  discountPercentage: number;

  @Column({ default: 0 })
  productId: string;

  @Column({ default: null })
  categoryId: string;

  @Column({ default: null })
  brandId: string;

  @Column({ type: 'date' })
  expiryDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
