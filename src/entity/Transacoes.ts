import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Double} from "typeorm";

@Entity()
export class Transacoes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_chave: number;

    @Column("decimal")
    valor: number;

    @Column()
    id_emissor: number;

    @Column()
    id_receptor: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    updated_at: Date;

}
