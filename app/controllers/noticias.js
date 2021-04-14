module.exports.noticias = function(app, req, res){
	var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);    
	    
    noticiasModel.getNoticias(function(error, result){
	  	res.render("noticias/noticias", {noticias : result});
	    	
	});	

}


module.exports.noticia = function(app, req, res){
	var connection = app.config.dbConnection();  
    var noticiaModels = new app.app.models.NoticiasDAO(connection);  
   
    var id_noticias = req.query;
	   
    noticiaModels.getNoticia(id_noticias, function(error, result){
	  	res.render("noticias/noticia", {noticia : result});
	    	
	});	 
	
}