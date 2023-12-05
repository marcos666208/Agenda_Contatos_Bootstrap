// Importa o módulo de conexão ao banco de dados
import db from '../db.js';

// Função para buscar todos os clientes na tabela 'clientes'
export function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes', (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

// Função para buscar um cliente pelo ID na tabela 'clientes'
export function buscarUm(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}

// Função para inserir um novo cliente na tabela 'clientes'
export function inserir(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        db.query('INSERT INTO clientes (Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertId);
            }
        );
    });
}

// Função para alterar os dados de um cliente na tabela 'clientes'
export function alterar(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        db.query('UPDATE clientes SET Nome_Cliente= ?, Segmento = ?, Cidade = ?, Estado = ?, Pais = ?, Mercado = ?, Regiao = ? WHERE Id_Cliente = ?',
            [Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao, Id_Cliente],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            }
        );
    });
}

// Função para excluir um cliente da tabela 'clientes' pelo ID
export function excluir(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('DELETE FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}
