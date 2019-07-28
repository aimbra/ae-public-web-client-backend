import { Controller, Get, Post, Body, Response, Delete, Param, Put } from '@nestjs/common';
import { RoleEntity } from './entities/role.entity';
import { RoleService } from './services/role.service';
import { RoleVM } from 'src/navigation/models/role.model';
import { SystemVM } from './interfaces/system.interface';
import { ViewSystemDto } from './dto/view-system.model';
import { SystemService } from './services/system.service';
import { identifier } from '@babel/types';

@Controller('v1/system')
export class SystemController {

  constructor(
    private readonly roleService: RoleService,
    private readonly systemService: SystemService,
  ) { }

  @Get()
  async getSystems(): Promise<ViewSystemDto[]> {
    try {
      return this.systemService.find();
    } catch (error) {
      return error;
    }
  }

  @Post()
  async createSystem(@Body() model: SystemVM): Promise<ViewSystemDto> {
    try {
      return await this.systemService.create(model);
    } catch (error) {
      return error;
    }
  }

  @Put('/:id')
  async updateSystem(@Param('id') id, @Body() model: SystemVM): Promise<ViewSystemDto> {
    try {
      return await this.systemService.update(id, model);
    } catch (error) {
      return error;
    }
  }

  @Get('/roles')
  async getRoles(): Promise<RoleEntity[]> {
    try {
      return await this.roleService.find();
    } catch (error) {
      return error;
    }
  }

  @Post('/roles')
  async createRole(@Body() roleVM: RoleVM): Promise<{}> {
    try {
      roleVM.title = roleVM.title.trim().toUpperCase();
      const roleResponse = await this.roleService.create(roleVM);
      return roleVM;
    } catch (error) {
      return error;
    }
  }

  @Delete('/roles')
  async removeRole(@Param() roleVM: RoleVM): Promise<{}> {
    try {
      await this.roleService.remove(roleVM);
      return {
        message: 'Removido com sucesso',
      };
    } catch (error) {
      return error;
    }
  }

  @Put('/roles/:id')
  async updateRole(@Param('id') roleId: any, @Body() roleVM: RoleVM): Promise<RoleVM> {
    try {
      roleVM.title = roleVM.title.trim().toUpperCase();
      const role = await this.roleService.update(roleVM);
      return role;
    } catch (error) {
      return error;
    }
  }

}
