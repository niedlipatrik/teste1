import express, { Router } from 'express';

import federacoesController from '../controllers/federacoesController';


class FederacoesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', federacoesController.list);
        this.router.get('/:id', federacoesController.getOne);
        this.router.post('/', federacoesController.create);
        this.router.put('/:id', federacoesController.update);
        this.router.delete('/:id', federacoesController.delete);
        
    }
}   


export default new FederacoesRoutes().router