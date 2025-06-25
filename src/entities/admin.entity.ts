import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  username: string;

  @Column({ type: 'varbinary', length: 100, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  note: string;
}
