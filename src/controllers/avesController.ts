import { Request, Response } from 'express';


import pool from '../database';

class AvesController {





    
    public async list(req: Request, res: Response): Promise<void> {
        const reggaiolas = await pool.query('SELECT * FROM aves WHERE aves.avesNumeroCriador = 33 order by aves.avesDataCadastro DESC LIMIT 100');
        res.json(reggaiolas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const reggaiolas = await pool.query('SELECT * FROM aves WHERE idAves = ?', [id]);
        console.log(reggaiolas.length);
        if (reggaiolas.length > 0) {
            return res.json(reggaiolas[0]);
        }
        res.status(404).json({ text: "Registro nao encontrado1" });
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

 

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO aves set ?', [req.body]);
        res.json({ message: 'Ave registrada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldAve = req.body;
        await pool.query('UPDATE aves set ? WHERE idAves = ?', [req.body, id]);
        res.json({ message: "Registro alterado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM aves WHERE idAves = ?', [id]);
        res.json({ message: "Registro excluído" });
    }
   
    
    public async searchDisponivel(req: Request, res: Response): Promise<void> {
    
        const avesDisponivel = await pool.query("SELECT * FROM aves WHERE avesEstado = 'Disponivel' LIMIT 100");
        res.json( avesDisponivel );
    }

    public async searchIndisponivel(req: Request, res: Response): Promise<void> {
        const avesIndisponivel = await pool.query("SELECT * FROM aves WHERE avesEstado = 'Indisponivel' LIMIT 100");
        res.json( avesIndisponivel );

    }
    public async searchExterno(req: Request, res: Response): Promise<void> {
        const avesExterno = await pool.query("SELECT * FROM aves WHERE avesEstado = 'Externo' LIMIT 50");
        res.json( avesExterno );
    }


    public async listFemea(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const listFemea = await pool.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Fêmea' ORDER BY avesDataCadastro DESC LIMIT 30");
        res.json(listFemea);



    }
    public async listMacho(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const listMacho = await pool.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Macho' ORDER BY avesDataCadastro DESC LIMIT 30");
        res.json(listMacho);

    }

    public async listDesconhecido(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const listDesconhecido = await pool.query("SELECT  avesCodGerado, avesSexo, avesGrupo, avesDataNascimento, avesEspecie, aves_codCasal, id_gaiola, avesEstado, avesPai, avesMae FROM aves WHERE avesSexo = 'Desconhecido' ORDER BY avesDataCadastro DESC LIMIT 30");
        res.json(listDesconhecido);
    }


    public async countFemea(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const countFemea = await pool.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Femêa'");
        res.json(countFemea);

    }

    public async countMacho(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const countMacho = await pool.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Macho'");
        res.json(countMacho);
    }
    
    public async countDesconhecido(req: Request, res: Response): Promise<void> {
        // const aves = await pool.query('SELECT * FROM aves');
        const countDesconhecido = await pool.query("SELECT COUNT (*) FROM aves WHERE avesSexo = 'Desconhecido'");
        res.json(countDesconhecido);
    }

}

const avesController = new AvesController;
export default avesController;



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