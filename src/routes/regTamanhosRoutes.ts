import express, { Router } from 'express';

import regGaiolasController from '../controllers/regGaiolasController';


class regGaiolasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regGaiolasController.list);
        this.router.get('/:id', regGaiolasController.getOne);
        this.router.post('/', regGaiolasController.create);
        this.router.put('/:id', regGaiolasController.update);
        this.router.delete('/:id', regGaiolasController.delete);
        
    }
}


export default new regGaiolasRoutes().router