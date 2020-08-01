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
class GruposController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reggrupos = yield database_1.default.query('SELECT * FROM grupo');
            res.json(reggrupos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reggrupos = yield database_1.default.query('SELECT * FROM grupo WHERE idclube = ?', [id]);
            console.log(reggrupos.length);
            if (reggrupos.length > 0) {
                return res.json(reggrupos[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO grupo set ?', [req.body]);
            res.json({ message: 'Grupo registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGrupo = req.body;
            yield database_1.default.query('UPDATE grupo set ? WHERE idclube = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM grupo WHERE idclube = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regGrupoController = new GruposController;
exports.default = regGrupoController;
