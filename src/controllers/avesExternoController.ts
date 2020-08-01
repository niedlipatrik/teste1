import { Request, Response } from 'express';


import pool from '../database';

class AvesExternoController {

    public async searchExterno(req: Request, res: Response): Promise<void> {
        const avesExterno = await pool.query("SELECT * FROM aves WHERE avesEstado = 'Externo'");
        res.json(avesExterno);
        
    }
}

const avesExternoController = new AvesExternoController;
export default avesExternoController;


