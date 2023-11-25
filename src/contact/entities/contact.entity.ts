import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'contacts',
})
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    name: 'first_name',
  })
  fistName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  occupation: string;

  @Column()
  notes: string;
}
