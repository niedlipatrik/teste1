"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regAnilhasCriadorController_1 = __importDefault(require("../controllers/regAnilhasCriadorController"));
class regAnilhasCriadorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regAnilhasCriadorController_1.default.list);
        this.router.get('/:id', regAnilhasCriadorController_1.default.getOne);
        // this.router.get('/:id', regAnilhasCriadorController.listAniCriador);
        this.router.get('/anilhas_do_criador/:id', regAnilhasCriadorController_1.default.listAniCriador);
        this.router.post('/', regAnilhasCriadorController_1.default.create);
        this.router.put('/:id', regAnilhasCriadorController_1.default.update);
        this.router.delete('/:id', regAnilhasCriadorController_1.default.delete);
    }
}
exports.default = new regAnilhasCriadorRoutes().router;
