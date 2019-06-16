import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
// ¿QUIEN GANARÄ?
@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

 
}