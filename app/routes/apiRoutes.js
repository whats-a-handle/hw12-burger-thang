
const db = require("../../models");
const Express = require('express');
const Router = Express.Router();


// Routes
// =============================================================

  
  // GET route for getting all of the todos
  Router.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      //console.log(dbBurger);
      res.json(dbBurger);
    });
  });

  // POST route for saving a new todo
  Router.post("/api/burgers", function(req, res) {
    
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_name: req.body.data.burger_name,
      devoured: req.body.data.devoured
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  Router.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({where:{
      id : req.params.id,
    }}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating todos. We can get the updated todo from req.body
  Router.put("/api/burgers/:id", function(req, res) {
        //console.log(req.params);
       // console.log(req.body.devoured);
      
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
