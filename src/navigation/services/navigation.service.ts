import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuNavigationItemRepository } from '../repositories/menu-navigation-item.repository';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(MenuNavigationItemEntity) private readonly menuNavigationItemRepository: MenuNavigationItemRepository,
  ) { }

  async findAll(): Promise<MenuNavigationItemEntity[]> {
    return await this.menuNavigationItemRepository.find();
  }

}
