"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avesController_1 = __importDefault(require("../controllers/avesController"));
class AveRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', avesController_1.default.list);
        this.router.get('/:id', avesController_1.default.getOne);
        this.router.post('/', avesController_1.default.create);
        this.router.put('/:id', avesController_1.default.update);
        this.router.delete('/:id', avesController_1.default.delete);
        this.router.get('/disponivel', avesController_1.default.searchDisponivel);
        this.router.get('/indisponivel', avesController_1.default.searchIndisponivel);
        this.router.get('/externo', avesController_1.default.searchExterno);
    }
}
exports.default = new AveRoutes().router;
