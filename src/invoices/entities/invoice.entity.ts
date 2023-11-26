import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { InvoiceItemEntity } from './invoice-item.entity';

@Entity({
  name: 'invoices',
})
export class InvoiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  invoiceNumber: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @OneToMany(() => InvoiceItemEntity, (item) => item.invoice)
  items: InvoiceItemEntity[];

  @Column({
    type: 'enum',
    enum: ['paid', 'pending', 'canceled'],
  })
  status: 'paid' | 'pending' | 'canceled';

  @Column({ type: 'date' })
  invoiceDate: Date;

  @Column({ type: 'date' })
  paymentDate: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;
}
