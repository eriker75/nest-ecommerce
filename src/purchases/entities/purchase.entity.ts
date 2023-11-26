import { ProviderEntity } from 'src/providers/entities/provider.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { PurchaseItemEntity } from './purchase-item.entity';

@Entity({
  name: 'purchases',
})
export class PurchaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => ProviderEntity)
  provider: ProviderEntity;

  @Column()
  date: Date;

  @OneToMany(() => PurchaseItemEntity, (item) => item.purchase)
  items: PurchaseItemEntity[];
}
