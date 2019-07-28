import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity('menu_navigation_items')
export class MenuNavigationItemEntity {

  @PrimaryGeneratedColumn()
  public id: any;

  @Column({
    type: 'bigint',
  })
  public order: number;

  @Column({
    type: 'varchar',
    length: 63,
  })
  public title: any;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public slug: any;

  @Column({
    type: 'boolean',
    name: 'has_children',
  })
  public hasChildren: boolean;

  @Column({
    type: 'varchar',
    length: 63,
  })
  public category?: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public description?: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public icon?: any;

  @ManyToOne(type => MenuEntity, menu => menu.menus)
  @JoinColumn({name: 'menu_id'})
  public menu?: MenuEntity;

}
