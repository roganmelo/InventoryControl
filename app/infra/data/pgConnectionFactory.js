var pgp = require('pg-promise')();

var createConnection = function(){
	var connectionString = {
	    host: 'localhost',
	    port: 5432,
	    database: 'inventory',
	    user: 'postgres',
	    password: 'Rog@n500'
	};

	var connection = pgp(connectionString);

	return connection;
};

//wrapper
module.exports = function(){
	return createConnection;
};