import { Router, Request, Response } from 'express';
import { request } from 'http';
import { createChave, getChaves, updateChave, getChave } from './controller/ChavesController';
import { getTransacoes, getTransacao, createTransacao } from './controller/TransacoesController';
import { getUsers, createUsers, getUser, updateUsers } from './controller/UsersController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Word' });
});
//usuarios
routes.get('/user', getUsers);

routes.get('/user/:id', getUser);

routes.post('/user', createUsers);

routes.put('/user/:id', updateUsers);

//chaves 
routes.get('/chaves', getChaves);

routes.get('/chaves/:id', getChave);

routes.post('/chaves', createChave);

routes.put('/chaves/:valor', updateChave);



//Transações
routes.get('/transacoes', getTransacoes);

routes.get('/transacoes/:id_chave', getTransacao);

routes.post('/transacoes', createTransacao);


export default routes;
