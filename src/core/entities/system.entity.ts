import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('systems')
export class SystemEntity {
  @PrimaryGeneratedColumn() id: any;
  @Column({ length: 63 }) title: string;
  @Column({ length: 7 }) version: string;
  @Column({ length: 63 }) nickname: string;
}
