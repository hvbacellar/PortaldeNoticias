module.exports = function(){

	this.getNoticia = function(connection, callback){
		 connection.query('select * from noticias where id_noticias = 2', callback); 
	}

	return this;
}