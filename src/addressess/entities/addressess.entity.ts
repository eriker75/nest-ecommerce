import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CountryEntity } from 'src/countries/entities/country.entity';
@Entity({
  name: 'addresses',
})
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @ManyToOne(() => CountryEntity)
  country: CountryEntity;

  @Column()
  city: string;

  @Column({ nullable: true })
  state: string;
}
