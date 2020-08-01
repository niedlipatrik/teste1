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
        this.router.get('/federacoes', federacoesController_1.default.list);
    }
}
exports.default = new FederacoesRoutes().router;
