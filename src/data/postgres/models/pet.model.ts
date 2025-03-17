import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float", {
    nullable: false,
  })
  weight: number;

  @Column("varchar", {
    length: 30,
    nullable: false,
  })
  name: string;

  @Column("varchar", {
    length: 30,
    nullable: false,
    default: "unknown",
  })
  breed: string;

  @Column("boolean", {
    default: true,
    nullable: false,
  })
  status: boolean;

  //TODO: Agregar relaciones con user y specie
}
