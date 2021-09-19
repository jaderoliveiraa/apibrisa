import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    updated_at: Date;

}
