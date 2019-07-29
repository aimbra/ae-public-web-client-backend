import { Controller, Post, Get, Body, UsePipes, BadRequestException, Put, Param, Delete } from '@nestjs/common';
import { NavigationService } from '../services/navigation.service';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';
import { CreateMenuNavigationItemDto, ViewMenuNavigationItemDto, UpdateMenuNavigationItemDto } from '../models/menu-navigation-item';
import { ValidationPipe } from '../pipes/validation.pipe';
import { MenuNavigationItemPipe } from '../pipes/menu-navigation-item.pipe';
import { MenuEntity } from '../entities/menu.entity';
import { MenuService } from '../services/menu.service';
import { CreateMenuDto, ViewMenuDto } from '../models/menu.model';
import { MenuValidationPipe } from '../pipes/menu-validation.pipe';

@Controller('v1/menus')
export class MenuController {

  constructor(
    private readonly menuService: MenuService,
    private readonly navItemService: NavigationService,
  ) { }

  @Post()
  async create(@Body(MenuValidationPipe) model: CreateMenuDto): Promise<ViewMenuDto> {
    const dataResponse = await this.menuService.create(MenuEntity.toEntity(model));
    const itemListResponse: MenuNavigationItemEntity[] = [];
    for (const item of model.items) {
      const nav: MenuNavigationItemEntity = new MenuNavigationItemEntity();
      nav.menu = dataResponse;
      nav.category = item.category;
      nav.description = item.description;
      nav.hasChildren = item.hasChildren;
      nav.icon = item.icon;
      nav.order = item.order;
      nav.slug = item.slug;
      nav.title = item.title;
      itemListResponse.push(await this.navItemService.create(nav).then((navItem: MenuNavigationItemEntity) => navItem));
    }
    dataResponse.items = itemListResponse;
    return dataResponse;
  }

  @Get()
  async find(): Promise<ViewMenuDto[]> {
    return this.menuService.find();
  }

  // @Put()
  // async update(@Body(ValidationPipe) model: UpdateMenuNavigationItemDto): Promise<ViewMenuNavigationItemDto> {
  //   return this.navigationService.update(model as MenuNavigationItemEntity);
  // }

  // @Delete()
  // async delete(@Body() models: ViewMenuNavigationItemDto[]): Promise<void> {
  //   if (models.length > 0) {
  //     for (const model of (models as [])) {
  //       await this.navigationService.delete(model as MenuNavigationItemEntity);
  //     }
  //   }
  // }

}
