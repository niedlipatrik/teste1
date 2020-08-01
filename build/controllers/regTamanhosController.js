"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClubesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regclubes = yield database_1.default.query('SELECT * FROM clube');
            res.json(regclubes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regclubes = yield database_1.default.query('SELECT * FROM clube WHERE idClube = ?', [id]);
            console.log(regclubes.length);
            if (regclubes.length > 0) {
                return res.json(regclubes[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO clube set ?', [req.body]);
            res.json({ message: 'Clube registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldClube = req.body;
            yield database_1.default.query('UPDATE clube set ? WHERE idClube = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clube WHERE idClube = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regClubeController = new ClubesController;
exports.default = regClubeController;
