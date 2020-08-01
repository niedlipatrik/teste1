"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regClubesController_1 = __importDefault(require("../controllers/regClubesController"));
class regClubesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regClubesController_1.default.list);
        this.router.get('/:id', regClubesController_1.default.getOne);
        this.router.post('/', regClubesController_1.default.create);
        this.router.put('/:id', regClubesController_1.default.update);
        this.router.delete('/:id', regClubesController_1.default.delete);
    }
}
exports.default = new regClubesRoutes().router;
