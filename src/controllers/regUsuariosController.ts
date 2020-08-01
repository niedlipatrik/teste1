import { Request, Response } from 'express';


import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const regusuarios = await pool.query('SELECT * FROM criador');
        res.json(regusuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const regusuarios = await pool.query('SELECT * FROM criador WHERE idCriador = ?', [id]);
        console.log(regusuarios.length);
        if (regusuarios.length > 0) {
            return res.json(regusuarios[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO criador set ?', [req.body]);
        res.json({ message: 'Usuario registrada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldUsuario = req.body;
        await pool.query('UPDATE criador set ? WHERE idCriador = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM criador WHERE idCriador = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
}

const regUsuarioController = new UsuariosController;
export default regUsuarioController;
