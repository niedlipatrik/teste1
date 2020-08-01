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
class PostasCriadorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regpostascriador = yield database_1.default.query('SELECT * FROM posturas');
            res.json(regpostascriador);
        });
    }
    // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    listPostasCriador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regpostascriador = yield database_1.default.query('SELECT *, COUNT(*) AS contagem FROM posturas WHERE postasIdCriador = ? GROUP BY postas_codPosta', [id]);
            if (regpostascriador.length > 0) {
                res.json(regpostascriador);
            }
            else
                res.status(404).json({ text: "Sem posta cadastrado" });
        });
    }
    listFilhosPosta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { posta } = req.params;
            const listaFilhosPosta = yield database_1.default.query('SELECT avesCodGerado, avesSexo FROM aves WHERE avesNumeroCriador = ? AND aves_codPosta = ?', [id, posta]);
            if (listaFilhosPosta.length > 0) {
                res.json(listaFilhosPosta);
            }
            else
                res.status(404).json({ text: "Sem posta cadastrado" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regpostascriador = yield database_1.default.query('SELECT * FROM posturas WHERE idpostas = ?', [id]);
            console.log(regpostascriador.length);
            if (regpostascriador.length > 0) {
                return res.json(regpostascriador[0]);
            }
            else
                res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO postas set ?', [req.body]);
            res.json({ message: 'Posta registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldPosta = req.body;
            yield database_1.default.query('UPDATE postas set ? WHERE criador_idCriador = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM posturas WHERE criador_idCriador = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regPostaController = new PostasCriadorController;
exports.default = regPostaController;
