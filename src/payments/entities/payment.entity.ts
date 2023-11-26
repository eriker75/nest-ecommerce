import { InvoiceEntity } from 'src/invoices/entities/invoice.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  paymentDate: Date;

  @Column({ nullable: true })
  externalReference: string;

  @ManyToOne(() => InvoiceEntity)
  invoice: InvoiceEntity;

  @Column({ type: 'enum', enum: ['card', 'bank_transfer', 'cash'] })
  paymentMethod: 'card' | 'bank_transfer' | 'cash';
}
