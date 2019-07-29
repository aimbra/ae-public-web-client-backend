import { MenuNavigationItemEntity } from "../entities/menu-navigation.entity";
import { IsString, Length, ValidateNested } from "class-validator";

export class CreateMenuDto {
  @IsString()
  @Length(3, 127)
  title: string;

  @ValidateNested()
  items: MenuNavigationItemEntity[];
}

export class ViewMenuDto {
  id: any;
  title: string;
  items: MenuNavigationItemEntity[];
}
