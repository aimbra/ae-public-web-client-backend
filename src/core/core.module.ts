import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemController } from './system.controller';
import { NavigationModule } from 'src/navigation/navigation.module';
import { RoleEntity } from './entities/role.entity';
import { RoleService } from './services/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
    ]),
  ],
  controllers: [
    SystemController,
  ],
  providers: [RoleService],
})
export class CoreModule {}
