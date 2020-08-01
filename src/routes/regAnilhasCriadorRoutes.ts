import express, { Router } from 'express';

import regAnilhasCriadorController from '../controllers/regAnilhasCriadorController';


class regAnilhasCriadorRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regAnilhasCriadorController.list);
        this.router.get('/:id', regAnilhasCriadorController.getOne);
        // this.router.get('/:id', regAnilhasCriadorController.listAniCriador);
        this.router.get('/anilhas_do_criador/:id', regAnilhasCriadorController.listAniCriador);
        this.router.post('/', regAnilhasCriadorController.create);
        this.router.put('/:id', regAnilhasCriadorController.update);
        this.router.delete('/:id', regAnilhasCriadorController.delete);
        
    }
}


export default new regAnilhasCriadorRoutes().router