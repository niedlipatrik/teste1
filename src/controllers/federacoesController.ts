import { Request, Response } from 'express';


import pool from '../database';

class FederacoesController {

    public async list(req: Request, res: Response): Promise<void> {
        const federacoes = await pool.query('SELECT * FROM federacoes');
        res.json(federacoes);

        // MODELO EXEMPLO MAP N1
                let listaFederacoes = federacoes.map(
                    ( lista: { federacaoNome: any; }) =>{
                        return{
                            nome: lista.federacaoNome
                        }
                    }
                )   


    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const federacoes = await pool.query('SELECT * FROM federacoes WHERE idfederacao = ?', [id]);
        console.log(federacoes.length);
        if (federacoes.length > 0) {
            return res.json(federacoes[0]);

        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO federacoes set ?', [req.body]);
        res.json({ message: 'Ave registrada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldAve = req.body;
        await pool.query('UPDATE federacoes set ? WHERE idfederacao = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM federacoes WHERE idfederacao = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
}

const federacoesController = new FederacoesController;
export default federacoesController;