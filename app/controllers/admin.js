module.exports.formulario_inclusao_noticia = function(app, req, res){
	res.render('admin/form_add_noticia', {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;
	//res.send(noticias);

	req.assert('titulo','O Titulo é obrigatorio').notEmpty();	
	req.assert('resumo','O resumo é obrigatorio').notEmpty();	
	req.assert('resumo','O resumo deve conter entre 10 e 100').len(10,100);	
    req.assert('autor', 'O autor é obrigatorio').notEmpty();
    req.assert('data_noticia','A data é obrigatorio').notEmpty().isDate({fomrat: 'YYYY-MM-DD'});		
    req.assert('noticia', 'A noticia é obrigatorio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
    	console.log(erros);
    	res.render('admin/form_add_noticia', {validacao : erros , noticia: noticia});
    	return;	
    }


	//Conexao com banco de dados
	var connection = app.config.dbConnection();
	//Implementar o model
	var noticiasModel =  new app.app.models.NoticiasDAO(connection);    

	//Salvar a noticia
	noticiasModel.salvarNoticia(noticia, function(error, result){
    	//res.render("noticias/noticias", {noticias : result});
    	res.redirect('/noticias');
    	
    });

}