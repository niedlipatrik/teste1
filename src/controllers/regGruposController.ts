import { Request, Response } from 'express';


import pool from '../database';

class GruposController {

    public async list(req: Request, res: Response): Promise<void> {
        const reggrupos = await pool.query('SELECT * FROM grupo');
        res.json(reggrupos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const reggrupos = await pool.query('SELECT * FROM grupo WHERE idclube = ?', [id]);
        console.log(reggrupos.length);
        if (reggrupos.length > 0) {
            return res.json(reggrupos[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO grupo set ?', [req.body]);
        res.json({ message: 'Grupo registrado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGrupo = req.body;
        await pool.query('UPDATE grupo set ? WHERE idclube = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM grupo WHERE idclube = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
}

const regGrupoController = new GruposController;
export default regGrupoController;

