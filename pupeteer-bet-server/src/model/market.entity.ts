import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

 
}