module.exports = function(app){
	var validator = {};
	var	assertionConcern = app.infra.common.assertionConcern;
	validator.messages = [];

	validator.validate = function(product){
		validator.messages = [];

		if(!assertionConcern.assertNotEmpty(product.name))
			validator.messages.push('Name is required.');
		else if(!assertionConcern.assertLength(product.name, 3, 19))
			validator.messages.push('Name must be at least 3 characters long and maximum 19 characters long.');

		if(!assertionConcern.assertNotEmpty(product.quantity))
			validator.messages.push('Quantity is required.');
		else if(!assertionConcern.assertIsInteger(product.quantity))
            validator.messages.push('Quantity must be a integer.');
        else if(!assertionConcern.assertLength(product.quantity, 1, 9))
            validator.messages.push('Quantity must be at least 1 characters long and maximum 9 characters long.');

        if(!assertionConcern.assertNotEmpty(product.price))
            validator.messages.push('Price is required.');
        else if(!assertionConcern.assertIsPositiveDecimal(product.price))
            validator.messages.push('Price must be a positive decimal.');
        else if(!assertionConcern.assertLength(product.price, 1, 10))
        	validator.messages.push('Price must be at least 1 characters long and maximum 14 characters long.');
	};

	return validator;
};