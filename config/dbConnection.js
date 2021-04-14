var mysql = require('mysql');

	var connMySQL = function(){
		//console.log('Conexão com o banco de dados estabelecida');
		return mysql.createConnection({
	    	host : 'localhost',	
	    	port: 3308,    	
	    	user : 'root',
	    	password : 'admin',	    	
	    	database : 'portal_noticias'
	    });


	}

	module.exports = function(){
        //console.log('AutoLoad carregado com sucesso');
		return connMySQL;	

	}

	   