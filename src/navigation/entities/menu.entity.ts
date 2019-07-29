import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuNavigationItemEntity } from './menu-navigation.entity';
import { CreateMenuDto } from '../models/menu.model';

@Entity('menus')
export class MenuEntity {
  static toEntity(model: CreateMenuDto): MenuEntity {
    const entity: MenuEntity = new MenuEntity();
    entity.title = model.title ? model.title : null;
    entity.items = model.items !== undefined || model.items.length > 0 ? model.items : null;
    return entity;
  }

  @PrimaryGeneratedColumn()
  public id: any;

  @Column({
    length: 31,
  })
  public title: string;

  @OneToMany(type => MenuNavigationItemEntity, item => item.menu)
  public items: MenuNavigationItemEntity[];

}
