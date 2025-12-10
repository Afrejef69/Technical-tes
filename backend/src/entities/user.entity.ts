import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'Insert full name',
    example: 'Jeffrey Reyes',
  })
  name!: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'Insert email',
    example: 'example@gmail.com',
  })
  email!: string;

  @Column({ type: 'int' })
  age!: number;
}

export default User;
