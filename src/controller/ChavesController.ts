import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Chaves } from "../entity/Chaves";
import { request } from "http";
import { userInfo } from "os";
import { PrimaryGeneratedColumn } from "typeorm";

export const getChaves = async (request: Request, response: Response) => {

    const chaves = await getRepository(Chaves).find();
    return response.json(chaves);
}

export const getChave = async (request: Request, response: Response) => {
    const { id } = request.params;
    const chave = await getRepository(Chaves).findOne(id);
    return response.json(chave);

}


export const createChave = async (request: Request, response: Response) => {

    const chave = await getRepository(Chaves).save(request.body);
    response.json(chave);


}

export const updateChave = async (request: Request, response: Response) => {
    const { valor } = request.params;
    const user = await getRepository(Chaves).update(valor, request.body);

    if (user.affected === 1) {
        const chaveUpdated = await getRepository(Chaves).findOne(valor);
        return response.json(chaveUpdated);
    } else {
        return response.status(404).json({ message: 'Chave não encontrada!' });

    }


}