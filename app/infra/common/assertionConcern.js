module.exports = function(){
	var assertionConcern = {};

	function toString(value){
		return value.toString();
	}

	assertionConcern.assertNotEmpty = function(value){
		return (value.toString() !== '') ? true : false;
	};

	assertionConcern.assertLength = function(value, minimum, maximum){
  		return (value.toString().length >= minimum && toString(value).length <= maximum) ? true : false;
	};

	assertionConcern.assertIsInteger = function(value){
		var regex = /^[0-9]+$/;
  		return (value.toString().match(regex)) ? true : false;
	};

	assertionConcern.assertIsPositiveDecimal = function(value){
		var regex = /^\d*(\.\d+)?$/;
		return (value.toString().match(regex)) ? true : false;
	};

	return assertionConcern;
};