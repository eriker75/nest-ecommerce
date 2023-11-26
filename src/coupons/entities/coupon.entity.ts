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

  @Column({
    type: 'enum',
    enum: ['amount', 'percentage'],
  })
  type: 'amount' | 'percentage';

  @Column('decimal', { default: 0 })
  discountAmount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  discountPercentage: number;

  @Column({ default: 0 })
  productId: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  category: string;

  @Column({ type: 'date', name: 'valid_from' })
  validFrom: Date;

  @Column({ type: 'date', name: 'valid_to' })
  validTo: Date;

  @CreateDateColumn()
  createdAt: Date;
}
