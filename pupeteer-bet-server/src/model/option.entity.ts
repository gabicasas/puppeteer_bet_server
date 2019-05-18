import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Bet } from './bet.entity';

@Entity()
// @Unique(['bet_host', 'market', 'event'])
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  // selector de la opcion que s trackea
  @Column()
  option: string;

  /**
   * Cuota
   */
  @Column()
  fee: number;

  @Column()
  url: string;

  @ManyToOne(type => Bet,  { nullable: false, onDelete: 'CASCADE'})
    bet: Bet;
}
