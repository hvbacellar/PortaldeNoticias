var app = require ('./config/server');


/*
var rotaNoticias = require('./app/routes/noticias')(app); 

var rotaFormulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app); */



app.listen(3000, function(){
	console.log('Servidor Rodando');

});