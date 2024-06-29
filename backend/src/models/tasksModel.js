const connection = require('./connection');

async function getAll() {
     return await connection.execute('SELECT * FROM tasks');
}

module.exports = {
     getAll
};