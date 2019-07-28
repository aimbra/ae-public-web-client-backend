import { EntityRepository, Repository } from 'typeorm';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';

@EntityRepository(MenuNavigationItemEntity)
export class MenuNavigationItemRepository extends Repository<MenuNavigationItemEntity> {
}
