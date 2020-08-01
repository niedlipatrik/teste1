"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regGruposController_1 = __importDefault(require("../controllers/regGruposController"));
class regGruposRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regGruposController_1.default.list);
        this.router.get('/:id', regGruposController_1.default.getOne);
        this.router.post('/', regGruposController_1.default.create);
        this.router.put('/:id', regGruposController_1.default.update);
        this.router.delete('/:id', regGruposController_1.default.delete);
    }
}
exports.default = new regGruposRoutes().router;
