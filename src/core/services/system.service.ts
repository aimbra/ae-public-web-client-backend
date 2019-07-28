import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemRepository } from '../repositories/system.repository';
import { SystemEntity } from '../entities/system.entity';

@Injectable()
export class SystemService {

  constructor(@InjectRepository(SystemEntity) private readonly systemRepository: SystemRepository) { }

  async find(): Promise<SystemEntity[]> {
    return this.systemRepository.find();
  }

  async create(systemEntity: SystemEntity): Promise<SystemEntity> {
    await this.systemRepository.save(systemEntity);
    return systemEntity;
  }

  async update(id: any, system: SystemEntity): Promise<SystemEntity> {
    const systemResponse = await this.systemRepository.findOne(id);
    const updated = Object.assign(systemResponse, system);
    return await this.systemRepository.save(updated);
  }

}
