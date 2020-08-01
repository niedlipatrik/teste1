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
class GaiolasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reggaiolas = yield database_1.default.query('SELECT * FROM registroGaiola');
            res.json(reggaiolas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reggaiolas = yield database_1.default.query('SELECT * FROM registroGaiola WHERE idregGaiola = ?', [id]);
            console.log(reggaiolas.length);
            if (reggaiolas.length > 0) {
                return res.json(reggaiolas[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO registroGaiola set ?', [req.body]);
            res.json({ message: 'Gaiola registrada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGaiola = req.body;
            yield database_1.default.query('UPDATE registroGaiola set ? WHERE idregGaiola = ?', [req.body, id]);
            res.json({ message: "Registro alterado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM registroGaiola WHERE idregGaiola = ?', [id]);
            res.json({ message: "Registro excluído" });
        });
    }
}
const regGaiolaController = new GaiolasController;
exports.default = regGaiolaController;
// import { Request, Response } from 'express';
// import pool from '../database';
// class GaiolasController {
//     public async list(req: Request, res: Response): Promise<void> {
//         const reggaiolas = await pool.query('SELECT * FROM registroGaiola');
//         res.json(reggaiolas);
//     }
//     public async getOne(req: Request, res: Response): Promise<any> {
//         const { id } = req.params;
//         const reggaiolas = await pool.query('SELECT * FROM registroGaiola WHERE id = ?', [id]);
//         console.log(reggaiolas.length);
//         if (reggaiolas.length > 0) {
//             return res.json(reggaiolas[0]);
//         }
//         res.status(404).json({ text: "Gaiola inexistente" });
//     }
//     public async create(req: Request, res: Response): Promise<void> {
//         const result = await pool.query('INSERT INTO reggaiolas set ?', [req.body]);
//         res.json({ message: 'Gaiola Registrada' });
//     }
//     public async update(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         const oldGaiola = req.body;
//         await pool.query('UPDATE reggaiolas set ? WHERE id = ?', [req.body, id]);
//         res.json({ message: "Registro Alterado com Sucesso" });
//     }
//     public async delete(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         await pool.query('DELETE FROM registroGaiola WHERE id = ?', [id]);
//         res.json({ message: "Gaiola excluida" });
//     }
// }
// const reggaiolasController = new GaiolasController;
// export default reggaiolasController;
