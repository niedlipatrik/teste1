import express, { Router } from 'express';

import regUsuariosController from '../controllers/regUsuariosController';


class regUsuariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regUsuariosController.list);
        this.router.get('/:id', regUsuariosController.getOne);
        this.router.post('/', regUsuariosController.create);
        this.router.put('/:id', regUsuariosController.update);
        this.router.delete('/:id', regUsuariosController.delete);
        
    }
}


export default new regUsuariosRoutes().router