const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'sunbeam'
    });

    connection.connect();
    return connection;
}

module.exports = {
    connect: connect
};
