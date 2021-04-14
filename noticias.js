var http = require('http');

var server = http.createServer(function (req, res){

	var categoria = req.url;

    if(categoria == '/Tecnologia') {
    	res.end("<html><body>Noticia de tecnologias </body></html>");
    } 
    else if(categoria == '/Moda'){
    	res.end("<html><body>Noticia de moda </body></html>");
    }
    else if(categoria == '/Beleza'){
    	res.end("<html><body>Noticia de Beleza </body></html>");
    } else {
    	res.end("<html><body> Portal de noticias </body></html>");
    }	

});

server.listen(3000);