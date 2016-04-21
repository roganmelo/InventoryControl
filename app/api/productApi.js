module.exports = function(app){
	var api = {};
	var	validator = app.validators.productValidator;
	var	repository = app.infra.repositories.productRepository;

	api.getAll = function(request, response){
		repository.getAll()
			.then(function(result){
				response.json(result);
			}, function(error){
				console.log(error);
				response.sendStatus(500);
			});
	};

	api.getById = function(request, response){
		repository.getById(request.params.id)
			.then(function(result){
				if(!result)
					response.sendStatus(404);
				else
					response.json(result);
			}, function(error){
				console.log(error);
				response.sendStatus(500);
			});
	};

	api.save = function(request, response){
		var product = request.body;

		validator.validate(product);
		
		if(validator.messages.length > 0)
			response.status(400).json(validator.messages);
		else
			repository.save(product)
				.then(function(){
					response.sendStatus(201);
				}, function(error){
					console.log(error);
					response.sendStatus(500);
				});
	};

	api.update = function(request, response){
		var product = request.body;

		validator.validate(product);

		if(validator.messages.length > 0)
			response.status(400).json(validator.messages);
		else
			repository.update(product)
				.then(function(){
					response.sendStatus(200);
				}, function(error){
					console.log(error);
					response.sendStatus(500);
				});
	};

	api.delete = function(request, response){
		repository.delete(request.params.id)
			.then(function(){
				response.sendStatus(200);
			}, function(error){
				console.log(error);
				response.sendStatus(500);
			});
	};

	return api;
};