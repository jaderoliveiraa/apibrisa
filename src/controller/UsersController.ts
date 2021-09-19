import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Users} from "../entity/Users";
import { request } from "http";
import { userInfo } from "os";

export const getUsers = async (request: Request, response: Response) => {

    const users = await getRepository(Users).find();
    return response.json(users);

}

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = await getRepository(Users).findOne(id);
    return response.json(user);

}

export const createUsers = async (request: Request, response: Response) =>{

    const createUser = await getRepository(Users).save(request.body);
    response.json(createUser);
}

export const updateUsers = async (request: Request, response: Response) =>{
    const { id } = request.params;
    const user = await getRepository(Users).update(id, request.body);

    if(user.affected === 1){
        const userUpdated = await getRepository(Users).findOne(id);
        return response.json(userUpdated);
    }else{
        return response.status(404).json({ message: 'Usuário não encontrado!'});
    }

    
}




