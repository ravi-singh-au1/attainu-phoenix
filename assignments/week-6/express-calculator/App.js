'use strict'
var express = require("express");
var bodyParser = require("body-parser");



var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add/:number1/:number2", function (request, response) {
    console.log("/add route execute");

    
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) + parseInt(number2)
    response.send("Addition of numbers :"+number1 +" and "+number2+" = "+result)


});
app.get("/sub/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) - parseInt(number2)
    response.send("Subtraction of numbers :"+number1 +" and "+number2+" = "+result)
});




app.get("/mul/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) * parseInt(number2)
    response.send("multiply of numbers :"+number1 +" and "+number2+" = "+result)
});

app.get("/div/:number1/:number2",function(request,response){
    var number1 = request.params.number1
    var number2 = request.params.number2
    var result = parseInt(number1) / parseInt(number2)
    response.send("divide of number :"+number1 +" and "+number2+" = "+result)
});

app.listen(3000)