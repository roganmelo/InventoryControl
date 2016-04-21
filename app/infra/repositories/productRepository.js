module.exports = function(app){
	var repository = {};
	var	connection = app.infra.data.pgConnectionFactory();
	var	guidGenerator = app.infra.common.guidGenerator;

	repository.getAll = function(){
		return connection.query('select * from product order by name');
	};

	repository.getById = function(id){
		return connection.oneOrNone('select * from product where id = $1', id);
	};

	repository.save = function(obj){
		obj.id = guidGenerator.generateGuid();
		return connection.none('insert into product values(${id}, ${name}, ${quantity}, ${price})', obj);
	};

	repository.update = function(obj){
		return connection
            .none('update product set name = ${name}, quantity = ${quantity}, price = ${price} where id = ${id}', obj);
	};

	repository.delete = function(id){
		return connection.none('delete from product where id = $1', id);
	};

	return repository;
};