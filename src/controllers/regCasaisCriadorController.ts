import { Request, Response } from 'express';


import pool from '../database';

class CasaisCriadorController {

    public async list(req: Request, res: Response): Promise<void> {
        const regcasaiscriador = await pool.query('SELECT * FROM casais');
        res.json(regcasaiscriador);
    }
        // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);


    public async listCasaisCriador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
    const regcasaiscriador = await pool.query('SELECT *, COUNT(*) AS contagem FROM casais WHERE casaisIdCriador = ? GROUP BY casais_codCasal' , [id]);
        if (regcasaiscriador.length > 0) {
            res.json(regcasaiscriador);
        }
       else res.status(404).json({ text: "Sem casal um cadastrado" });
    }

    public async listFilhosCasal(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { casal } = req.params;
        const listaFilhosCasal = await pool.query('SELECT avesCodGerado, avesSexo FROM aves WHERE avesNumeroCriador = ? AND aves_codCasal = ?', [id, casal]);
        if (listaFilhosCasal.length > 0) {
            res.json(listaFilhosCasal);
        }
        else  res.status(404).json({ text: "Sem casal cadastrado" });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const regcasaiscriador = await pool.query('SELECT * FROM casais WHERE idcasais = ?', [id]);
        console.log(regcasaiscriador.length);
        if (regcasaiscriador.length > 0) {
            return res.json(regcasaiscriador[0]);
        }
        else  res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO casais set ?', [req.body]);
        res.json({ message: 'Casal registrado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldCasal = req.body;
        await pool.query('UPDATE casais set ? WHERE criador_idCriador = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM casais WHERE criador_idCriador = ?', [id]);
        res.json({ message: "Registro excluído" });
    }

    // public async addCasal(req: Request, res: Response): Promise<void> {
    //     const result = await pool.query('INSERT INTO casais set ?', [req.body]);
    //     res.json({ message: 'Casal registrado' });
    // }

}


const regCasalController = new CasaisCriadorController;
export default regCasalController;

