import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admin_token')
export class AdminToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_admin', type: 'int', nullable: true })
  admin_id: number;

  @Column({ type: 'text', nullable: true })
  token: string;

  @Column({ type: 'timestamp', nullable: true })
  expired_at: Date;
}
