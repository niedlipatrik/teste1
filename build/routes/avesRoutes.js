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
        // this.router.get('/search/:CodFed', avesController.search);
        // this.router.get('/:id/:usuario', avesController.getOne);
        this.router.get('/', avesController_1.default.searchDisponivel);
        this.router.get('/', avesController_1.default.searchIndisponivel);
        this.router.get('/', avesController_1.default.searchExterno);
        this.router.get('/', avesController_1.default.listFemea);
        this.router.get('/', avesController_1.default.listMacho);
        this.router.get('/', avesController_1.default.listDesconhecido);
        this.router.get('/', avesController_1.default.countFemea);
        this.router.get('/', avesController_1.default.countMacho);
        this.router.get('/', avesController_1.default.countDesconhecido);
    }
}
exports.default = new AveRoutes().router;
