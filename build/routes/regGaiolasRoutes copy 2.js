"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regGaiolasController_1 = __importDefault(require("../controllers/regGaiolasController"));
class regGaiolasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regGaiolasController_1.default.list);
        this.router.get('/:id', regGaiolasController_1.default.getOne);
        this.router.post('/', regGaiolasController_1.default.create);
        this.router.put('/:id', regGaiolasController_1.default.update);
        this.router.delete('/:id', regGaiolasController_1.default.delete);
    }
}
exports.default = new regGaiolasRoutes().router;
