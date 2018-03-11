const db = require("../../models");
const Express = require('express');
const Router = Express.Router();


  Router.get("/api/burgers", function(req, res) {

    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });


  Router.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.data.burger_name,
      devoured: req.body.data.devoured
    }).then(function(dbBurger) {

      res.json(dbBurger);
    });
  });


  Router.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({where:{
      id : req.params.id,
    }}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

 
  Router.put("/api/burgers/:id", function(req, res) {

      db.Burger.update(
          { devoured: req.body.devoured } , 
          { where: { id : req.params.id }} 
    ).then(function(affectedRows) {
    db.Burger.findAll().then(function(burgers) {
         res.send();
    })

  });
});
  
module.exports = Router;
