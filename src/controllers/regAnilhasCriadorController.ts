import { Request, Response } from 'express';


import pool from '../database';

class AnilhasCriadorController {

    public async list(req: Request, res: Response): Promise<void> {
        const reganilhascriador = await pool.query('SELECT * FROM anilhas_criador');
        res.json(reganilhascriador);
    }
    // public async listAniCriador(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    //     const reganilhascriador = await pool.query('SELECT * FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
    //     res.json(reganilhascriador);
    // }

    public async listAniCriador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const reganilhascriador = await pool.query('SELECT * FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
        if (reganilhascriador.length > 0) {
            res.json(reganilhascriador);
        }
        res.status(404).json({ text: "Sem anilha cadastrada" });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const reganilhascriador = await pool.query('SELECT * FROM anilhas_criador WHERE idanilhas_criador = ?', [id]);
        console.log(reganilhascriador.length);
        if (reganilhascriador.length > 0) {
            return res.json(reganilhascriador[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO anilhas_criador set ?', [req.body]);
        res.json({ message: 'Anilha registrado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldAnilha = req.body;
        await pool.query('UPDATE anilhas_criador set ? WHERE criador_idCriador = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM anilhas_criador WHERE criador_idCriador = ?', [id]);
        res.json({ message: "Registro excluído" });
    }

    // public async addAnilha(req: Request, res: Response): Promise<void> {
    //     const result = await pool.query('INSERT INTO anilhas_criador set ?', [req.body]);
    //     res.json({ message: 'Anilha registrado' });
    // }

}


const regAnilhaController = new AnilhasCriadorController;
export default regAnilhaController;

