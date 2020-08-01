import express, { Router } from 'express';

import regClubesController from '../controllers/regClubesController';


class regClubesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }


    config() {
        this.router.get('/', regClubesController.list);
        this.router.get('/:id', regClubesController.getOne);
        this.router.post('/', regClubesController.create);
        this.router.put('/:id', regClubesController.update);
        this.router.delete('/:id', regClubesController.delete);
        
    }
}


export default new regClubesRoutes().router