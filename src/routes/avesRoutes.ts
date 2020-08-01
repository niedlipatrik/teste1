import express, { Router } from 'express';

import avesController from '../controllers/avesController';

class AveRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', avesController.list);
        this.router.get('/:id', avesController.getOne);
        this.router.post('/', avesController.create);
        this.router.put('/:id', avesController.update);
        this.router.delete('/:id', avesController.delete);
        // this.router.get('/search/:CodFed', avesController.search);
        // this.router.get('/:id/:usuario', avesController.getOne);
        this.router.get('/', avesController.searchDisponivel);
        this.router.get('/', avesController.searchIndisponivel);
        this.router.get('/', avesController.searchExterno);
        this.router.get('/', avesController.listFemea)
        this.router.get('/', avesController.listMacho)
        this.router.get('/', avesController.listDesconhecido)
        this.router.get('/', avesController.countFemea)
        this.router.get('/', avesController.countMacho)
        this.router.get('/', avesController.countDesconhecido)
    }

}

export default new AveRoutes().router;

