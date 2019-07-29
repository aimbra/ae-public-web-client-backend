import { Controller, Post, Get, Body, UsePipes, BadRequestException, Put, Param, Delete } from '@nestjs/common';
import { NavigationService } from '../services/navigation.service';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';
import { CreateMenuNavigationItemDto, ViewMenuNavigationItemDto, UpdateMenuNavigationItemDto } from '../models/menu-navigation-item';
import { ValidationPipe } from '../pipes/validation.pipe';
import { MenuNavigationItemPipe } from '../pipes/menu-navigation-item.pipe';

@Controller('v1/navigations')
export class NavigationController {

  constructor(private readonly navigationService: NavigationService) {}

  @Post()
  async create(@Body(ValidationPipe) model: CreateMenuNavigationItemDto): Promise<ViewMenuNavigationItemDto> {
    return await this.navigationService.create(MenuNavigationItemEntity.toEntity(model));
  }

  @Get()
  async findAll(): Promise<ViewMenuNavigationItemDto[]> {
    return this.navigationService.findAll();
  }

  @Put()
  async update(@Body(ValidationPipe) model: UpdateMenuNavigationItemDto): Promise<ViewMenuNavigationItemDto> {
    return this.navigationService.update(model as MenuNavigationItemEntity);
  }

  @Delete()
  async delete(@Body() models: ViewMenuNavigationItemDto[]): Promise<void> {
    if (models.length > 0) {
      for (const model of (models as [])) {
        await this.navigationService.delete(model as MenuNavigationItemEntity);
      }
    }
  }

}
