import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Market } from './market.entity';
 // MADRID - BARCA - EMPATE
@Entity()
// @Unique(['bet_host', 'market', 'event'])
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Market,  { nullable: false, onDelete: 'CASCADE'})
    market: Market;
}