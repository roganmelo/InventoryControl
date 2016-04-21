var path = require('path');

module.exports = function(app){
	var api = app.api.productApi;

	app.route('/api/products')
		.get(api.getAll)
		.post(api.save);

	app.route('/api/products/:id')
        .get(api.getById)
        .delete(api.delete)
        .put(api.update);
};