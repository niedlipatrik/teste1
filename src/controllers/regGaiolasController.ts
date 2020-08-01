import { Request, Response } from 'express';


import pool from '../database';

class GaiolasController {

    public async list(req: Request, res: Response): Promise<void> {
        const reggaiolas = await pool.query('SELECT * FROM registroGaiola');
        res.json(reggaiolas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const reggaiolas = await pool.query('SELECT * FROM registroGaiola WHERE idregGaiola = ?', [id]);
        console.log(reggaiolas.length);
        if (reggaiolas.length > 0) {
            return res.json(reggaiolas[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO registroGaiola set ?', [req.body]);
        res.json({ message: 'Gaiola registrada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGaiola = req.body;
        await pool.query('UPDATE registroGaiola set ? WHERE idregGaiola = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM registroGaiola WHERE idregGaiola = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
}

const regGaiolaController = new GaiolasController;
export default regGaiolaController;



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