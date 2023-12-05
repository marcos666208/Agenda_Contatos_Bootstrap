// Importa o módulo express para criar o servidor web
import express from 'express';

// Importa o módulo cors
import cors from 'cors';

// Importa as rotas definidas no arquivo routes.js
import routes from './routes.js';

// Cria uma instância do servidor express
const server = express();

// Aplica o cors para lidar com as requisições de diferentes origens
server.use(cors());

// Configura o servidor para utilizar o formato de dados urlencoded
server.use(express.urlencoded({ extended: true }));

// Define o caminho '/api' como o ponto de entrada para as rotas
server.use('/api', routes);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver pronto
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});