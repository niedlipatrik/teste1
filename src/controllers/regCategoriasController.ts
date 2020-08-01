import { Request, Response } from 'express';


import pool from '../database';

class ClubesController {

    public async list(req: Request, res: Response): Promise<void> {
        const regclubes = await pool.query('SELECT * FROM clube');
        res.json(regclubes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const regclubes = await pool.query('SELECT * FROM clube WHERE idClube = ?', [id]);
        console.log(regclubes.length);
        if (regclubes.length > 0) {
            return res.json(regclubes[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO clube set ?', [req.body]);
        res.json({ message: 'Clube registrado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldClube = req.body;
        await pool.query('UPDATE clube set ? WHERE idClube = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM clube WHERE idClube = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
}

const regClubeController = new ClubesController;
export default regClubeController;

