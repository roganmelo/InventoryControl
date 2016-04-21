var express = require('express');
var	consign = require('consign');
var	bodyParser = require('body-parser');
var	path = require('path');
	
module.exports = function(){
	var app = express();

	app.use(express.static('./public'));
	app.use(express.static('./node_modules'));
	//app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	consign({ cwd: 'app' })
		.include('infra')
		.then('validators')
		.then('api')
		.then('routes')
		.into(app);

	app.all('/*', function(request, response){
        response.sendFile(path.resolve('public/views/layout.html'));
    });

	return app;
};