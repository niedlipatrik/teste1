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
    // public async list(req: Request, res: Response): Promise<void> {
    //     const regpostascriador = await pool.query('SELECT *, COUNT (*) as contagem FROM postas');
    //     res.json(regpostascriador);
    // }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regpostascriador = yield database_1.default.query('SELECT *, COUNT(*) AS contagem FROM postas  GROUP BY postascasais_codCasal');
            if (regpostascriador.length > 0) {
                res.json(regpostascriador);
            }
            else
                res.status(404).json({ text: "Sem casal udoi cadastrado" });
        });
    }
    // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    //funcionando 
    // public async listPostasCriador(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    // const regpostascriador = await pool.query('SELECT *, COUNT(*) AS contagem FROM postas WHERE postasIdCriador = ? GROUP BY postascasais_codCasal' , [id]);
    //     if (regpostascriador.length > 0) {
    //         res.json(regpostascriador);
    //     }
    //    else res.status(404).json({ text: "Sem posta 1 cadastrado" });
    listPostasCriador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regpostascriador = yield database_1.default.query('SELECT *, (*) COUNT as contagem FROM postas WHERE postascasais_codCasal = ?', [id]);
            if (regpostascriador.length > 0) {
                res.json(regpostascriador);
            }
            else
                res.status(404).json({ text: "Sem posta 1 cadastrado" });
        });
    }
    listPostas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regpostas = yield database_1.default.query('SELECT *, (*) COUNT as contagem FROM postas WHERE postascasais_codCasal = ?', [id]);
            if (regpostas.length > 0) {
                res.json(regpostas);
            }
            else
                res.status(404).json({ text: "Sem posta 2 cadastrado" });
        });
    }
    listFilhosPosta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { posta } = req.params;
            const listaFilhosPosta = yield database_1.default.query('SELECT avesCodGerado, avesSexo FROM postas WHERE avesNumeroCriador = ? AND aves_codPosta = ?', [id, posta]);
            if (listaFilhosPosta.length > 0) {
                res.json(listaFilhosPosta);
            }
            else
                res.status(404).json({ text: "Sem posta 3 cadastrado" });
        });
    }
    listPostaCodCasal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { casalId } = req.params;
            const listaCodPosta = yield database_1.default.query('SELECT * FROM postas WHERE postascasais_codCasal = ?', [casalId]);
            if (listaCodPosta.length > 0) {
                res.json(listaCodPosta);
            }
            else
                res.status(404).json({ text: "Sem posta 4 cadastrado" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const regpostascriador = yield database_1.default.query('SELECT * FROM postas WHERE idpostas = ?', [id]);
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
            yield database_1.default.query('DELETE FROM postas WHERE criador_idCriador = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regPostaController = new PostasCriadorController;
exports.default = regPostaController;
