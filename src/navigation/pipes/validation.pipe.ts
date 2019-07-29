import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateMenuNavigationItemDto } from '../models/menu-navigation-item';
import { NavigationService } from '../services/navigation.service';
import { MenuNavigationItemEntity } from '../entities/menu-navigation.entity';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {

  constructor(private readonly service: NavigationService) {}

  async transform(obj: CreateMenuNavigationItemDto, metatype: ArgumentMetadata) {
    this.hasTitle(obj.title);
    this.hasSlug(obj.slug);
    return obj;
  }

  private hasTitle(title: string) {
    const dataResponse = this.service.hasByTitle(title);
    if (dataResponse) {
      throw new BadRequestException('Já existe a propriedade title no Banco');
    }
  }

  private hasSlug(slug: string) {
    const dataResponse = this.service.hasBySlug(slug);
    if (dataResponse) {
      throw new BadRequestException('Este slug já esta cadastrado em algum menu');
    }
  }
}
