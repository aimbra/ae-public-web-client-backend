import { Module } from '@nestjs/common';
import { NavigationController } from './controllers/navigation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavigationService } from './services/navigation.service';
import { MenuService } from './services/menu.service';
import { CoreModule } from 'src/core/core.module';
import { MenuEntity } from './entities/menu.entity';
import { MenuNavigationItemEntity } from './entities/menu-navigation.entity';
import { MenuController } from './controllers/menu.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuEntity,
      MenuNavigationItemEntity,
    ]),
  ],
  controllers: [NavigationController, MenuController],
  providers: [
    NavigationService,
    MenuService,
  ],
})
export class NavigationModule {}
