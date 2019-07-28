import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemController } from './system.controller';
import { NavigationModule } from 'src/navigation/navigation.module';
import { RoleEntity } from './entities/role.entity';
import { RoleService } from './services/role.service';
import { SystemService } from './services/system.service';
import { SystemEntity } from './entities/system.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
      SystemEntity,
    ]),
  ],
  controllers: [
    SystemController,
  ],
  providers: [RoleService, SystemService],
})
export class CoreModule {}
