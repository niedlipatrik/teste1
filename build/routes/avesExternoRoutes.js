"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avesExternoController_1 = __importDefault(require("../controllers/avesExternoController"));
class AveExternoRoutes {
    constructor() {
        this.router = express_1.Router();
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
        this.router.get('/', avesExternoController_1.default.searchExterno);
    }
}
exports.default = new AveExternoRoutes().router;
