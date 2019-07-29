import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { CreateMenuNavigationItemDto } from '../models/menu-navigation-item';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';
import { Utils } from 'src/helpers/utils.model';

export class MenuNavigationItemPipe implements PipeTransform {
  transform(obj: any, metadata: ArgumentMetadata) {

    if (obj as CreateMenuNavigationItemDto) {
      return this.dtoToEntity(obj);
    }

  }

  private dtoToEntity(obj: CreateMenuNavigationItemDto): MenuNavigationItemEntity {
    const entity = new MenuNavigationItemEntity();
    entity.order = Utils.hasValue(obj.order) ? obj.order : -1;
    entity.title = Utils.hasValue(obj.title) ? obj.title : null;
    entity.hasChildren = obj.hasChildren ? obj.hasChildren : false;
    entity.category = Utils.hasValue(obj.category) ? obj.category : null;
    entity.description = Utils.hasValue(obj.description) ? obj.description : null;
    entity.icon = Utils.hasValue(obj.icon) ? obj.icon : null;
    return entity;
  }

}
