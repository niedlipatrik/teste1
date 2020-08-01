"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regPostasController_1 = __importDefault(require("../controllers/regPostasController"));
class regPostasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regPostasController_1.default.list);
        // this.router.get('/:id', regPostasController.getOne);
        // this.router.get('/:id', regPostasController.listAniCriador);
        this.router.get('/lista-filhos/:id/:casalId', regPostasController_1.default.listFilhosPosta);
        this.router.put('/edit/:id', regPostasController_1.default.update);
        this.router.get('/add/', regPostasController_1.default.listPostas);
        this.router.get('/:id', regPostasController_1.default.listPostasCriador);
        this.router.delete('/:id', regPostasController_1.default.delete);
        this.router.post('/', regPostasController_1.default.create);
    }
}
exports.default = new regPostasRoutes().router;
