module.exports.dbConnection = function () {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        port     : 8889,
        database : 'test_db'
    });

    return connection;

};
