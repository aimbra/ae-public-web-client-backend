import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from '../entities/role.entity';
import { RoleRepository } from '../repositories/role.repository';
import { getConnection } from 'typeorm';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(RoleEntity) private readonly roleRepository: RoleRepository) {}

  async find(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  async create(role: RoleEntity): Promise<RoleEntity> {
    await this.roleRepository.save(role);
    return role;
  }

  async remove(role: RoleEntity): Promise<void> {
    await this.roleRepository.remove(role);
  }

  async update(role: RoleEntity): Promise<RoleEntity> {
    const roleResponse = await this.roleRepository.findOne(role.id);
    const updated = Object.assign(roleResponse, role);
    const dataSaved = await this.roleRepository.save(updated);
    return dataSaved;
  }

}
