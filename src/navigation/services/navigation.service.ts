import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuNavigationItemRepository } from '../repositories/menu-navigation-item.repository';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';
import { ViewMenuNavigationItemDto } from '../models/menu-navigation-item';
import { Service } from 'typedi';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(MenuNavigationItemEntity)
    private readonly menuNavigationItemRepository: MenuNavigationItemRepository,
  ) {}

  async findAll(): Promise<MenuNavigationItemEntity[]> {
    return await this.menuNavigationItemRepository.find();
  }

  async create(
    menuNavigationItem: MenuNavigationItemEntity,
  ): Promise<ViewMenuNavigationItemDto> {
    await this.menuNavigationItemRepository.save(menuNavigationItem);
    return MenuNavigationItemEntity.toDto(menuNavigationItem);
  }

  async hasByTitle(title: string): Promise<boolean> {
    const obj = await this.menuNavigationItemRepository.findOne({ title });
    return obj !== undefined;
  }

  async hasBySlug(slug: string): Promise<boolean> {
    const obj = await this.menuNavigationItemRepository.findOne({ slug });
    return obj !== undefined;
  }

  async update(
    model: MenuNavigationItemEntity,
  ): Promise<MenuNavigationItemEntity> {
    const obj = await this.menuNavigationItemRepository.findOne({
      id: model.id,
    });
    Object.assign(obj, model);
    await this.menuNavigationItemRepository.save(obj);
    return obj;
  }

  async delete(model: MenuNavigationItemEntity): Promise<void> {
    await this.menuNavigationItemRepository.remove(model);
  }

}
