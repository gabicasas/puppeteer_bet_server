import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
//@Unique(['bet_host', 'market', 'event'])
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

 
}