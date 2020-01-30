//this is main route handling folder format.
const express = require("express");

const app = express();
const BudgetController = require("./controllers/budget.js")

app.get('/',(req,res)=>{
    res.send("Server running successfully");
})

app.get('/budget',BudgetController.someFunctionDefinedInController);

// or another idea you have various routes so first require all those routes here from folders.