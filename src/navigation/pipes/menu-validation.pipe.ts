import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { MenuService } from '../services/menu.service';
import { CreateMenuDto } from '../models/menu.model';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class MenuValidationPipe implements PipeTransform {

  constructor(
    private readonly menuService: MenuService,
    private readonly navService: NavigationService,
  ) { }

  async transform(value: CreateMenuDto, metadata: ArgumentMetadata) {

    const dataMenuResponse = await this.menuService.hasByTitle(value.title);
    if (dataMenuResponse) {
      throw new BadRequestException('Já existe um menu com este título cadastrado.');
    }

    for (const item of value.items) {
      if (await this.navService.hasByTitle(item.title) && dataMenuResponse) {
        throw new BadRequestException('Já existe item de menu com este título.');
      }
      if (await this.navService.hasBySlug(item.title) && dataMenuResponse) {
        throw new BadRequestException('Já existe item de menu com este slug.');
      }
    }

    return value;
  }

}
