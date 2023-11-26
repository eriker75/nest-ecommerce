import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PurchaseEntity } from 'src/purchases/entities/purchase.entity';

@Entity({
  name: 'providers',
})
export class ProviderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.provider)
  purchases: PurchaseEntity[];
}
