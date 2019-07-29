import {validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsBoolean, IsString, IsNotEmpty, Validate} from 'class-validator';

export class CreateMenuNavigationItemDto {
  @Min(0, {
    message: 'O número não pode ser negativo.',
  })
  order: number;

  @Length(3, 63, {
    message: 'Seu título precisa ter entre 3 a 64 caracteres',
  })
  @IsString({
    message: 'A categoria precisa ser do tipo string',
  })
  @IsNotEmpty({
    message: 'O seu título esta vázio',
  })
  title: string;

  @IsNotEmpty({
    message: 'O campo slug não pode ser vazio',
  })
  @Length(3, 255, { message: 'Este campo precisa ter entre 3 a 255 caracteres' })
  slug: string;

  @IsBoolean({message: 'O valor precisa ser True ou False'})
  hasChildren: boolean;

  @IsString({
    message: 'A categoria precisa ser do tipo string',
  })
  @Length(3, 63, {
    message: 'Seu título precisa ter entre 3 a 64 caracteres',
  })
  category: string;

  @IsString({
    message: 'A descrição precisa ser do tipo string',
  })
  @Length(3, 255, {
    message: 'Seu título precisa ter entre 3 a 255 caracteres',
  })
  description: string;

  @IsString({
    message: 'A mensagem precisa ser do tipo string',
  })
  @Length(3, 63, {
    message: 'O icone precisa ter entre 3 a 64 caracteres',
  })
  icon: string;
}

export class UpdateMenuNavigationItemDto {

  @Min(0, {
    message: 'O número não pode ser negativo.',
  })
  order: number;

  @Length(3, 63, {
    message: 'Seu título precisa ter entre 3 a 64 caracteres',
  })
  @IsString({
    message: 'A categoria precisa ser do tipo string',
  })
  @IsNotEmpty({
    message: 'O seu título esta vázio',
  })
  title: string;

  @IsNotEmpty({
    message: 'O campo slug não pode ser vazio',
  })
  @Length(3, 255, { message: 'Este campo precisa ter entre 3 a 255 caracteres' })
  slug: string;

  @IsBoolean({message: 'O valor precisa ser True ou False'})
  hasChildren: boolean;

  @IsString({
    message: 'A categoria precisa ser do tipo string',
  })
  @Length(3, 63, {
    message: 'Seu título precisa ter entre 3 a 64 caracteres',
  })
  category: string;

  @IsString({
    message: 'A descrição precisa ser do tipo string',
  })
  @Length(3, 255, {
    message: 'Seu título precisa ter entre 3 a 255 caracteres',
  })
  description: string;

  @IsString({
    message: 'A mensagem precisa ser do tipo string',
  })
  @Length(3, 63, {
    message: 'O icone precisa ter entre 3 a 64 caracteres',
  })
  icon: string;
}

export class ViewMenuNavigationItemDto {
  id: any;
  order: number;
  slug: string;
  title: string;
  hasChildren: boolean;
  category: string;
  description: string;
  icon: string;
}
