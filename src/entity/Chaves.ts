import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Double} from "typeorm";

@Entity()
export class Chaves {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: string;

    @Column()
    id_user: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    updated_at: Date;

}
