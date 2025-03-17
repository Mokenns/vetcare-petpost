import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PostStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity()
export class PetPost extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  pet_name: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  image_url: string;

  @Column('enum', {
    enum: PostStatus,
    default: PostStatus.PENDING,
    nullable: false,
  })
  status: PostStatus;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  owner: string;

  @Column('boolean', {
    default: false,
    nullable: false,
  })
  hasFound: boolean;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  created_at: Date;
}
