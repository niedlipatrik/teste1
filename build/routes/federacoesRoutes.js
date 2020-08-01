"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const federacoesController_1 = __importDefault(require("../controllers/federacoesController"));
class FederacoesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', federacoesController_1.default.list);
        this.router.get('/:id', federacoesController_1.default.getOne);
        this.router.post('/', federacoesController_1.default.create);
        this.router.put('/:id', federacoesController_1.default.update);
        this.router.delete('/:id', federacoesController_1.default.delete);
    }
}
exports.default = new FederacoesRoutes().router;
