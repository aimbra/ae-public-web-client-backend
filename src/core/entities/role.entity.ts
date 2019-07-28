import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { MenuNavigationItemEntity } from 'src/navigation/entities/menu-navigation.entity';
import { RoleVM } from 'src/navigation/models/role.model';

@Entity('roles')
export class RoleEntity {

  @PrimaryGeneratedColumn()
  public id: any;

  @Column({
    length: 31,
  })
  public title: string;

  static toEntity(roleVM: RoleVM): RoleEntity {
    const role: RoleEntity = new RoleEntity();
    if (roleVM.id) {
      role.id = roleVM.id;
    }
    role.title = roleVM.title ? roleVM.title : null;
    return role;
  }

}
