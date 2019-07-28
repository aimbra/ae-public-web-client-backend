import { Controller, Post, Get, Body } from '@nestjs/common';
import { NavigationService } from '../services/navigation.service';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';

@Controller('v1/navigations')
export class NavigationController {

  constructor(private readonly navigationService: NavigationService) {}

  @Post()
  async create(@Body() model: MenuNavigationItemEntity) {
    return model;
  }

  @Get()
  async findAll(): Promise<MenuNavigationItemEntity[]> {
    return this.navigationService.findAll();
  }

}
