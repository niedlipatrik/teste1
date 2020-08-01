import express, { Router } from 'express';

import regCasaisCriadorController from '../controllers/regCasaisCriadorController';


class regCasaisCriadorRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regCasaisCriadorController.list);
        // this.router.get('/:id', regCasaisCriadorController.getOne);
        // this.router.get('/:id', regCasaisCriadorController.listAniCriador);
        this.router.get('/:id', regCasaisCriadorController.listCasaisCriador);
        this.router.get('/lista-filhos/:id/:casal', regCasaisCriadorController.listFilhosCasal);
        this.router.post('/', regCasaisCriadorController.create);
        this.router.put('/:id', regCasaisCriadorController.update);
        this.router.delete('/:id', regCasaisCriadorController.delete);
        
    }
}


export default new regCasaisCriadorRoutes().router