import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CreateMenuNavigationItemDto, ViewMenuNavigationItemDto, UpdateMenuNavigationItemDto } from '../models/menu-navigation-item';
import { Utils } from 'src/helpers/utils.model';
import { Exclude } from 'class-transformer';
import { MenuEntity } from './menu.entity';

@Entity('menu_navigation_items')
export class MenuNavigationItemEntity {

  @PrimaryGeneratedColumn()
  @Exclude()
  public id: any;

  @Column({
    type: 'bigint',
  })
  public order: number;

  @Column({
    type: 'varchar',
    length: 63,
  })
  public title: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public slug: string;

  @Column({
    type: 'boolean',
    name: 'has_children',
  })
  public hasChildren: boolean;

  @Column({
    type: 'varchar',
    length: 63,
  })
  public category: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public description: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public icon: any;

  @ManyToOne(type => MenuEntity, menu => menu.items)
  public menu: MenuEntity;

  static toEntity(model: CreateMenuNavigationItemDto | UpdateMenuNavigationItemDto): MenuNavigationItemEntity {
    const menuNavItem: MenuNavigationItemEntity = new MenuNavigationItemEntity();
    menuNavItem.order = Utils.hasValue(model.order) ? model.order : -1;
    menuNavItem.title = Utils.hasValue(model.title) ? model.title : null;
    menuNavItem.slug = Utils.hasValue(model.slug) ? model.slug : '/' + menuNavItem.title.toLowerCase();
    menuNavItem.hasChildren = model.hasChildren ? model.hasChildren : false;
    menuNavItem.category = Utils.hasValue(model.category) ? model.category : null;
    menuNavItem.description = Utils.hasValue(model.description) ? model.description : null;
    menuNavItem.icon = Utils.hasValue(model.icon) ? model.icon : null;
    return menuNavItem;
  }

  static toDto(model: MenuNavigationItemEntity): ViewMenuNavigationItemDto {
    const menuNavItem: ViewMenuNavigationItemDto = new ViewMenuNavigationItemDto();
    menuNavItem.id = Utils.hasValue(model.id) ? model.id : null;
    menuNavItem.order = Utils.hasValue(model.order) ? model.order : -1;
    menuNavItem.title = Utils.hasValue(model.title) ? model.title : null;
    menuNavItem.hasChildren = Utils.hasValue(model.hasChildren) ? model.hasChildren : null;
    menuNavItem.category = Utils.hasValue(model.category) ? model.category : null;
    menuNavItem.description = Utils.hasValue(model.description) ? model.description : null;
    menuNavItem.icon = Utils.hasValue(model.icon) ? model.icon : null;
    return menuNavItem;
  }
}
