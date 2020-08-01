"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regUsuariosController_1 = __importDefault(require("../controllers/regUsuariosController"));
class regUsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regUsuariosController_1.default.list);
        this.router.get('/:id', regUsuariosController_1.default.getOne);
        this.router.post('/', regUsuariosController_1.default.create);
        this.router.put('/:id', regUsuariosController_1.default.update);
        this.router.delete('/:id', regUsuariosController_1.default.delete);
    }
}
exports.default = new regUsuariosRoutes().router;
