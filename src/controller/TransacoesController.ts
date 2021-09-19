import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Transacoes} from "../entity/Transacoes";
import { request } from "http";
import { userInfo } from "os";

export const getTransacoes = async (request: Request, response: Response) => {

    const transacoes = await getRepository(Transacoes).find();
    return response.json(transacoes);

}

export const getTransacao = async (request: Request, response: Response) => {
    const { id_chave } = request.params;
    const transacao = await getRepository(Transacoes).findOne(id_chave);
    return response.json(transacao);

}

export const createTransacao = async (request: Request, response: Response) =>{

    const createTransacao = await getRepository(Transacoes).save(request.body);
    response.json(createTransacao);
}