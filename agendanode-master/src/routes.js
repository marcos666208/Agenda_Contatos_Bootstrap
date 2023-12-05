// Importa o módulo express para criar um objeto de roteamento
import express from 'express';

// Cria uma instância do roteador express
const router = express.Router();

// Importa funções específicas do controlador ClienteController
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

// Rota para buscar todos os clientes
router.get('/clientes', buscarTodos);

// Rota para buscar um cliente pelo ID
router.get('/cliente/:Id_Cliente', buscarUm);

// Rota para inserir um novo cliente
router.post('/cliente', inserir);

// Rota para alterar os dados de um cliente pelo ID
router.put('/cliente/:Id_Cliente', alterar);

// Rota para excluir um cliente pelo ID
router.delete('/cliente/:Id_Cliente', excluir);

// Exporta o roteador como padrão para ser utilizado em outras partes do código
export { router as default };
