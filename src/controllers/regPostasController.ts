import { Request, Response } from 'express';


import pool from '../database';

class PostasCriadorController {

    // public async list(req: Request, res: Response): Promise<void> {
    //     const regpostascriador = await pool.query('SELECT *, COUNT (*) as contagem FROM postas');
    //     res.json(regpostascriador);
    // }

    public async list(req: Request, res: Response): Promise<void> {
   
    const regpostascriador = await pool.query('SELECT *, COUNT(*) AS contagem FROM postas  GROUP BY postascasais_codCasal');
        if (regpostascriador.length > 0) {
            res.json(regpostascriador);
        }
       else res.status(404).json({ text: "Sem casal udoi cadastrado" });
    }



        // const aves = await pool.query('SELECT * FROM aves WHERE idAves = ? AND avesNumeroCriador = ?', [id, usuario]);

//funcionando 
    // public async listPostasCriador(req: Request, res: Response): Promise<void> {
    //     const { id } = req.params;
    // const regpostascriador = await pool.query('SELECT *, COUNT(*) AS contagem FROM postas WHERE postasIdCriador = ? GROUP BY postascasais_codCasal' , [id]);
    //     if (regpostascriador.length > 0) {
    //         res.json(regpostascriador);
    //     }
    //    else res.status(404).json({ text: "Sem posta 1 cadastrado" });
    
    public async listPostasCriador(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
    const regpostascriador = await pool.query('SELECT *, (*) COUNT as contagem FROM postas WHERE postascasais_codCasal = ?' , [id]);
        if (regpostascriador.length > 0) {
            res.json(regpostascriador);
        }
       else res.status(404).json({ text: "Sem posta 1 cadastrado" });
    }

    public async listPostas(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
    const regpostas = await pool.query('SELECT *, (*) COUNT as contagem FROM postas WHERE postascasais_codCasal = ?' , [id]);
        if (regpostas.length > 0) {
            res.json(regpostas);
        }
       else res.status(404).json({ text: "Sem posta 2 cadastrado" });
    }

    public async listFilhosPosta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { posta } = req.params;
        const listaFilhosPosta = await pool.query('SELECT avesCodGerado, avesSexo FROM postas WHERE avesNumeroCriador = ? AND aves_codPosta = ?', [id, posta]);
        if (listaFilhosPosta.length > 0) {
            res.json(listaFilhosPosta);
        }
        else  res.status(404).json({ text: "Sem posta 3 cadastrado" });
    }
    public async listPostaCodCasal(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { casalId } = req.params;
        const listaCodPosta = await pool.query('SELECT * FROM postas WHERE postascasais_codCasal = ?', [casalId]);
        if (listaCodPosta.length > 0) {
            res.json(listaCodPosta);
        }
        else  res.status(404).json({ text: "Sem posta 4 cadastrado" });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const regpostascriador = await pool.query('SELECT * FROM postas WHERE idpostas = ?', [id]);
        console.log(regpostascriador.length);
        if (regpostascriador.length > 0) {
            return res.json(regpostascriador[0]);
        }
        else  res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO postas set ?', [req.body]);
        res.json({ message: 'Posta registrado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldPosta = req.body;
        await pool.query('UPDATE postas set ? WHERE criador_idCriador = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM postas WHERE criador_idCriador = ?', [id]);
        res.json({ message: "Registro excluído" });
    }

    // public async addPosta(req: Request, res: Response): Promise<void> {
    //     const result = await pool.query('INSERT INTO postas set ?', [req.body]);
    //     res.json({ message: 'Posta registrado' });
    // }

}


const regPostaController = new PostasCriadorController;
export default regPostaController;

