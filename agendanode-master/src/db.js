// Importa o módulo mysql2 para se conectar ao banco de dados MySQL
import mysql from 'mysql2';

// Configurações de conexão ao banco de dados
/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */

// Configurações de conexão ao banco de dados (com valores fixos)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'lojadb'
});

// Estabelece a conexão ao banco de dados e exibe uma mensagem se bem-sucedido
connection.connect((error) => {
    if (error) throw error;
    console.log(`Conectado ao banco de dados: lojadb`);
});

// Exporta a conexão para ser utilizada em outras partes do código
export default connection;
