const Express = require('express');
const Path = require('path');
const Router = Express.Router();
const db = require("../../models");

Router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(allBurgers) {

      	const hbsObject = {
      		burgers : allBurgers.map(function(unparsedBurger){

      		const burger = {
      			burger_name : unparsedBurger.burger_name,
      			devoured : unparsedBurger.devoured,
      			id : unparsedBurger.id,
      		}
      		return burger;
      	})};
      		
      	console.log(hbsObject);
    	 res.render("index", hbsObject);
      	});
});
 




module.exports = Router;