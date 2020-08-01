import express, { Router } from 'express';

import avesExternoController from '../controllers/avesExternoController';

class AveExternoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        // this.router.get('/', avesExternoController.list);
        // this.router.get('/:id', avesExternoController.getOne);
        // this.router.post('/', avesExternoController.create);
        // this.router.put('/:id', avesExternoController.update);
        // this.router.delete('/:id', avesExternoController.delete);
        // this.router.get('/disponivel', avesExternoController.searchDisponivel);
        // this.router.get('/indisponivel', avesExternoController.searchIndisponivel);
        this.router.get('/', avesExternoController.searchExterno);
    }

}

export default new AveExternoRoutes().router;

