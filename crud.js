import Connection from './conexao.js';

const db = Connection.connection()

setTimeout(() => {
    db.end();
}, 1500);