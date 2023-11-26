import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'settings',
})
export class SettingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'meta_key',
  })
  metaKey: string;

  @Column({
    type: 'simple-json',
    name: 'meta_value',
  })
  metaValue: string | number | boolean | Record<string, unknown>;
}
