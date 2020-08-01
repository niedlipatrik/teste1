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
class AnilhasCriadorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reganilhascriador = yield database_1.default.query('SELECT * FROM anilhas_criador');
            res.json(reganilhascriador);
        });
    }
    // public async listAniCriador(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    //     const reganilhascriador = await pool.query('SELECT * FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
    //     res.json(reganilhascriador);
    // }
    listAniCriador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reganilhascriador = yield database_1.default.query('SELECT * FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
            if (reganilhascriador.length > 0) {
                res.json(reganilhascriador);
            }
            res.status(404).json({ text: "Sem anilha cadastrada" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reganilhascriador = yield database_1.default.query('SELECT * FROM anilhas_criador WHERE idanilhas_criador = ?', [id]);
            console.log(reganilhascriador.length);
            if (reganilhascriador.length > 0) {
                return res.json(reganilhascriador[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO anilhas_criador set ?', [req.body]);
            res.json({ message: 'Anilha registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldAnilha = req.body;
            yield database_1.default.query('UPDATE anilhas_criador set ? WHERE criador_idCriador = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regAnilhaController = new AnilhasCriadorController;
exports.default = regAnilhaController;
