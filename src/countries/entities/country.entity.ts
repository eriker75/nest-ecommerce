import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'countries',
})
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;
}
