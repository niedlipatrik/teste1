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
            const reggaiolas = yield database_1.default.query('SELECT * FROM aves WHERE aves.avesNumeroCriador = 33 order by aves.avesDataCadastro DESC LIMIT 100');
            res.json(reggaiolas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reggaiolas = yield database_1.default.query('SELECT * FROM aves WHERE idAves = ?', [id]);
            console.log(reggaiolas.length);
            if (reggaiolas.length > 0) {
                return res.json(reggaiolas[0]);
            }
            res.status(404).json({ text: "Registro nao encontrado1" });
        });
    }
    // public async list(req: Request, res: Response): Promise<void> {
    //     // const aves = await pool.query('SELECT * FROM aves');
    //     const { iduser } = req.params;
    //     // const id = localStorage.getItem('id') ;
    //     const aves = await pool.query('SELECT * FROM aves, criador WHERE aves.avesNumeroCriador = 33 order by aves.avesDataCadastro DESC LIMIT 100');
    //     // console.log(req.params);
    //     res.json(aves);
    // }
    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const { usuario } = req.params;
    //     // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    //     const aves = await pool.query('SELECT * FROM aves WHERE aves.avesNumeroCriador = ? order by aves.avesDataCadastro DESC LIMIT 100', [id]);
    //     // console.log('aves.length');
    //     if (aves.length > 0) {
    //         return res.json(aves);  
    //     }
    //     res.status(404).json({ text: "Registro nao encontrado 1" });
    // }
    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const { usuario } = req.params;
    //     // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    //     const aves = await pool.query('SELECT * FROM aves WHERE idAves = ?', [id]);
    //     // console.log('aves.length');
    //     if (aves.length > 0) {
    //         return res.json(aves[0]);
    //     }
    //     res.status(404).json({ text: "Registro nao encontrado 2" });
    // }
    // public async search(req: Request, res: Response): Promise<any> {
    //     const { CodFed } = req.params;
    //     const { usuario } = req.params;
    //     // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);
    //     const CFed = await pool.query('SELECT * FROM aves WHERE avesCodFederacao = ?', [req.body]);
    //         if (CFed.length > 0) {
    //         return res.json(CFed);
    //     }
    //     res.status(404).json({ text: "Registro nao encontrado 3" });
    // }
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
    searchDisponivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avesDisponivel = yield database_1.default.query("SELECT * FROM aves WHERE avesEstado = 'Disponivel' LIMIT 100");
            res.json(avesDisponivel);
        });
    }
    searchIndisponivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avesIndisponivel = yield database_1.default.query("SELECT * FROM aves WHERE avesEstado = 'Indisponivel' LIMIT 100");
            res.json(avesIndisponivel);
        });
    }
    searchExterno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avesExterno = yield database_1.default.query("SELECT * FROM aves WHERE avesEstado = 'Externo' LIMIT 50");
            res.json(avesExterno);
        });
    }
    listFemea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const listFemea = yield database_1.default.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Fêmea' ORDER BY avesDataCadastro DESC LIMIT 30");
            res.json(listFemea);
        });
    }
    listMacho(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const listMacho = yield database_1.default.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Macho' ORDER BY avesDataCadastro DESC LIMIT 30");
            res.json(listMacho);
        });
    }
    listDesconhecido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const listDesconhecido = yield database_1.default.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Desconhecido' ORDER BY avesDataCadastro DESC LIMIT 30");
            res.json(listDesconhecido);
        });
    }
    countFemea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const countFemea = yield database_1.default.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Femêa'");
            res.json(countFemea);
        });
    }
    countMacho(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const countMacho = yield database_1.default.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Macho'");
            res.json(countMacho);
        });
    }
    countDesconhecido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const aves = await pool.query('SELECT * FROM aves');
            const countDesconhecido = yield database_1.default.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Desconhecido'");
            res.json(countDesconhecido);
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
