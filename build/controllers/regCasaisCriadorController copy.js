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
class CasaisCriadorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regcasaiscriador = yield database_1.default.query('SELECT * FROM casais');
            res.json(regcasaiscriador);
        });
    }
    // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    listCasaisCriador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regcasaiscriador = yield database_1.default.query('SELECT *, COUNT(*) AS contagem FROM casais WHERE casaisIdCriador = ? GROUP BY casais_codCasal', [id]);
            if (regcasaiscriador.length > 0) {
                res.json(regcasaiscriador);
            }
            else
                res.status(404).json({ text: "Sem casal cadastrado" });
        });
    }
    listFilhosCasal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { casal } = req.params;
            const listaFilhosCasal = yield database_1.default.query('SELECT avesCodGerado, avesSexo FROM aves WHERE avesNumeroCriador = ? AND aves_codCasal = ?', [id, casal]);
            if (listaFilhosCasal.length > 0) {
                res.json(listaFilhosCasal);
            }
            else
                res.status(404).json({ text: "Sem casal cadastrado" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regcasaiscriador = yield database_1.default.query('SELECT * FROM casais WHERE idcasais = ?', [id]);
            console.log(regcasaiscriador.length);
            if (regcasaiscriador.length > 0) {
                return res.json(regcasaiscriador[0]);
            }
            else
                res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO casais set ?', [req.body]);
            res.json({ message: 'Casal registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldCasal = req.body;
            yield database_1.default.query('UPDATE casais set ? WHERE criador_idCriador = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM casais WHERE criador_idCriador = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regCasalController = new CasaisCriadorController;
exports.default = regCasalController;
