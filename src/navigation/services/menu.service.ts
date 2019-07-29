import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuRepository } from '../repositories/menu.repository';
import { MenuEntity } from '../entities/menu.entity';
import { MenuNavigationItemRepository } from '../repositories/menu-navigation-item.repository';
import { ViewMenuDto } from '../models/menu.model';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity) private readonly menuRepository: MenuRepository,
  ) { }

  async find(): Promise<MenuEntity[]> {
    return await this.menuRepository.find();
  }

  async create(menu: MenuEntity): Promise<ViewMenuDto> {
    await this.menuRepository.save(menu);
    return menu;
  }

  async hasByTitle(title: string): Promise<boolean> {
    const obj = await this.menuRepository.findOne({ title });
    console.log(obj);
    return obj !== undefined;
  }

}
