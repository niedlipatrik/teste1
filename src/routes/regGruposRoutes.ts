import express, { Router } from 'express';

import regGruposController from '../controllers/regGruposController';


class regGruposRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regGruposController.list);
        this.router.get('/:id', regGruposController.getOne);
        this.router.post('/', regGruposController.create);
        this.router.put('/:id', regGruposController.update);
        this.router.delete('/:id', regGruposController.delete);
        
    }
}


export default new regGruposRoutes().router