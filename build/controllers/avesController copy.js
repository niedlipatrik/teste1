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
class AvesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const aves = yield database_1.default.query('SELECT * FROM aves');
            res.json(aves);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const aves = yield database_1.default.query('SELECT * FROM aves WHERE idAves = ?', [id]);
            console.log(aves.length);
            if (aves.length > 0) {
                return res.json(aves[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO aves set ?', [req.body]);
            res.json({ message: 'Ave registrada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldAve = req.body;
            yield database_1.default.query('UPDATE aves set ? WHERE idAves = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM aves WHERE idAves = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo } = req.params;
            yield database_1.default.query('SELECT * FROM aves WHERE avesCodFederacao = ?', [titulo]);
            res.json({ message: "Registro excluído" });
        });
    }
    searchDisponivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo } = req.params;
            yield database_1.default.query('SELECT * FROM aves WHERE avesEstado = Disponivel');
            res.json({ message: "Registro excluído" });
        });
    }
    searchIndisponivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estado = 'Indisponivel';
            yield database_1.default.query('SELECT * FROM aves WHERE avesEstado = ?', estado);
            res.json({ message: "Registro excluído" });
        });
    }
    searchExterno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avesExterno = yield database_1.default.query("SELECT * FROM fds WHERE avesEstado = 'Externo'");
            res.json({ avesExterno });
            res.json({ message: "Registro excluído" });
        });
    }
}
const avesController = new AvesController;
exports.default = avesController;
// import { Request, Response } from 'express';
// import pool from '../database';
// class AvesController {
//     public async list(req: Request, res: Response): Promise<void> {
//         const aves = await pool.query('SELECT * FROM aves');
//         res.json(aves);
//     }
//     public async getOne(req: Request, res: Response): Promise<any> {
//         const { id } = req.params;
//         const aves = await pool.query('SELECT * FROM aves WHERE id = ?', [id]);
//         console.log(aves.length);
//         if (aves.length > 0) {
//             return res.json(aves[0]);
//         }
//         res.status(404).json({ text: "Ave inexistente" });
//     }
//     public async create(req: Request, res: Response): Promise<void> {
//         const result = await pool.query('INSERT INTO aves set ?', [req.body]);
//         res.json({ message: 'Ave Registrada' });
//     }
//     public async update(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         const oldAve = req.body;
//         await pool.query('UPDATE aves set ? WHERE id = ?', [req.body, id]);
//         res.json({ message: "Registro Alterado com Sucesso" });
//     }
//     public async delete(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         await pool.query('DELETE FROM aves WHERE id = ?', [id]);
//         res.json({ message: "Ave excluida" });
//     }
// }
// const avesController = new AvesController;
// export default avesController;
