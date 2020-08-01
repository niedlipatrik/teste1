import express, { Router } from 'express';

import regPostasController from '../controllers/regPostasController';


class regPostasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regPostasController.list);
        // this.router.get('/:id', regPostasController.getOne);
        // this.router.get('/:id', regPostasController.listAniCriador);
        this.router.get('/lista-filhos/:id/:casalId', regPostasController.listFilhosPosta);
        this.router.put('/edit/:id', regPostasController.update);
        this.router.get('/add/', regPostasController.listPostas);
        this.router.get('/:id', regPostasController.listPostasCriador);
        this.router.delete('/:id', regPostasController.delete);
        this.router.post('/', regPostasController.create);
        
    }
}


export default new regPostasRoutes().router