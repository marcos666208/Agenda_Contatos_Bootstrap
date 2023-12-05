// Importa funções do serviço ClienteService com alias
import { 
    buscarTodos as _buscarTodos, 
    buscarUm as _buscarUm, 
    inserir as _inserir, 
    alterar as _alterar, 
    excluir as _excluir 
} from '../services/ClienteService.js';

// Função para buscar todos os clientes e formatar a resposta em JSON
export async function buscarTodos(req, res) {
    const json = { error: '', result: [] };

    // Chama a função do serviço para buscar todos os clientes
    const clientes = await _buscarTodos();

    // Formata os resultados para o formato desejado
    for (let i in clientes) {
        json.result.push({
            codigo: clientes[i].Id_Cliente,
            nome: clientes[i].Nome_Cliente,
            cidade: clientes[i].Cidade,
            estado: clientes[i].Estado,
            pais: clientes[i].Pais
        });
    }
    
    res.json(json);
}

// Função para buscar um cliente pelo ID e formatar a resposta em JSON
export async function buscarUm(req, res) {
    let json = { error: '', result: {} };

    // Obtém o ID do cliente a partir dos parâmetros da requisição
    let id_cliente = req.params.Id_Cliente;

    // Chama a função do serviço para buscar um cliente pelo ID
    let cliente = await _buscarUm(id_cliente);

    // Atualiza a resposta JSON com o resultado
    if (cliente) {
        json.result = cliente;
    }

    res.json(json);
}

// Função para inserir um novo cliente e formatar a resposta em JSON
export async function inserir(req, res) {
    let json = { error: '', result: {} };

    // Obtém os dados do cliente a partir do corpo da requisição
    let codigo = req.body.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

    // Verifica se os dados necessários estão presentes
    if (codigo && nome && segmento && cidade && estado && pais && mercado && regiao) {
        // Chama a função do serviço para inserir um novo cliente
        let cliente = await _inserir(codigo, nome, segmento, cidade, estado, pais, mercado, regiao);
        json.result = {
            cliente: codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    } else {
        json.error = 'Erro no envio dos dados';
    }

    res.json(json);
}

// Função para alterar os dados de um cliente e formatar a resposta em JSON
export async function alterar(req, res) {
    let json = { error: '', result: {} };

    // Obtém os dados do cliente a partir dos parâmetros da requisição e do corpo
    let codigo = req.params.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

    // Verifica se os dados necessários estão presentes
    if (codigo && nome && segmento && cidade && estado && pais && mercado && regiao) {
        // Chama a função do serviço para alterar os dados de um cliente
        await _alterar(codigo, nome, segmento, cidade, estado, pais, mercado, regiao);
        json.result = {
            codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    } else {
        json.error = 'Erro no envio dos dados';
    }

    res.json(json);
}

// Função para excluir um cliente pelo ID e formatar a resposta em JSON
export async function excluir(req, res) {
    let json = { error: '', result: {} };

    // Obtém o ID do cliente a partir dos parâmetros da requisição
    let id_cliente = req.params.Id_Cliente;

    // Chama a função do serviço para excluir um cliente pelo ID
    let cliente = await _excluir(id_cliente);

    // Atualiza a resposta JSON com o resultado
    if (cliente) {
        json.result = cliente;
    }

    res.json(json);
}
