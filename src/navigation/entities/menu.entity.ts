import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuNavigationItemEntity } from './menu-navigation.entity';

@Entity('menus')
export class MenuEntity {

  @PrimaryGeneratedColumn()
  public id: any;

  @Column({
    length: 31,
  })
  public title: string;

  @OneToMany(type => MenuNavigationItemEntity, menu => menu.menu)
  public menus: MenuNavigationItemEntity[];
}
