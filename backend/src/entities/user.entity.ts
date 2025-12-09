import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
import class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre:string;

  @Column()
  email:string;

  @Column()
  edad: numbre;
}