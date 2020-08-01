import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import avesRoutes from './routes/avesRoutes';
import federacoesRoutes from "./routes/federacoesRoutes";
import regGaiolasRoutes from './routes/regGaiolasRoutes';
import regUsuariosRoutes from './routes/regUsuariosRoutes';
import regClubesRoutes from './routes/regClubesRoutes';
import regGruposRoutes from './routes/regGruposRoutes';
import regCategoriasRoutes from './routes/regCategoriasRoutes';
import regTamanhosRoutes from './routes/regTamanhosRoutes';
import regAnilhasCriadorRoutes from './routes/regAnilhasCriadorRoutes';
import avesExternoRoutes from './routes/avesExternoRoutes';
import avesController from './controllers/avesController';
import regCasaisCriadorRoutes from './routes/regCasaisCriadorRoutes';
import regPostasRoutes from './routes/regPostasRoutes';


class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/relatorios/', indexRoutes);
        this.app.use('/api/relatorios/aves', avesRoutes);
        // this.app.use('/api/relatorios/aves/search', avesController.search);
        this.app.use('/api/relatorios/ativas', avesController.searchDisponivel);
        this.app.use('/api/relatorios/inativas',  avesController.searchIndisponivel);
        this.app.use('/api/relatorios/externo', avesController.searchExterno);
        this.app.use('/api/registro-federacoes', federacoesRoutes);
        this.app.use('/api/registro-gaiola', regGaiolasRoutes);
        this.app.use('/api/cadastro-usuario', regUsuariosRoutes);
        this.app.use('/api/cadastro-clube', regClubesRoutes);
        this.app.use('/api/cadastro-grupo', regGruposRoutes);
        this.app.use('/api/cadastro-categoria', regCategoriasRoutes);
        this.app.use('/api/cadastro-tamanho', regTamanhosRoutes);
        this.app.use('/api/lista_anilhas_criador', regAnilhasCriadorRoutes);
        this.app.use('/api/lista_anilhas_criador/anilhas_do_criador/', regAnilhasCriadorRoutes);
        this.app.use('/api/registro-anilha', regAnilhasCriadorRoutes);
        this.app.use('/api/femea', avesController.listFemea);
        this.app.use('/api/macho', avesController.listMacho);
        this.app.use('/api/desconhecido', avesController.listDesconhecido);
        this.app.use('/api/countFemea', avesController.countFemea);
        this.app.use('/api/countMacho', avesController.countMacho);
        this.app.use('/api/countDesconhecido', avesController.countDesconhecido);
        this.app.use('/api/casais/postas', regPostasRoutes);
        this.app.use('/api/casais', regCasaisCriadorRoutes);

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
    

}

const server = new Server();
server.start();