import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuRepository } from '../repositories/menu.repository';
import { MenuEntity } from '../entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity) private readonly menuRepository: MenuRepository,
  ) {}
}
