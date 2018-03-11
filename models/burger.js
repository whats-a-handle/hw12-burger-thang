module.exports = function(sequelize, DataTypes) {

	const Burger = sequelize.define("Burger", {
		id : {
			type : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey : true,
			allowNull : false,
		},
		burger_name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		devoured : {
			type : DataTypes.BOOLEAN,
			defaultValue : false,
			allowNull : false,
		}
	});

	return Burger;
}