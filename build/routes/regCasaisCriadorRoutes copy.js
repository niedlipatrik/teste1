"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regCasaisCriadorController_1 = __importDefault(require("../controllers/regCasaisCriadorController"));
class regCasaisCriadorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regCasaisCriadorController_1.default.list);
        // this.router.get('/:id', regCasaisCriadorController.getOne);
        // this.router.get('/:id', regCasaisCriadorController.listAniCriador);
        this.router.get('/:id', regCasaisCriadorController_1.default.listCasaisCriador);
        this.router.get('/lista-filhos/:id/:casal', regCasaisCriadorController_1.default.listFilhosCasal);
        this.router.post('/', regCasaisCriadorController_1.default.create);
        this.router.put('/:id', regCasaisCriadorController_1.default.update);
        this.router.delete('/:id', regCasaisCriadorController_1.default.delete);
    }
}
exports.default = new regCasaisCriadorRoutes().router;
