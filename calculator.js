//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
    // console.log(__dirname + "/index.html");
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){

   var n1 = Number(req.body.num1);
   var n2 = Number(req.body.num2);

   var result = n1 + n2;

    res.send("The result od the calculation is " + result);
});



app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);

    var result = (weight/(height*height));

    res.send("Your bmi is " + result);
});


app.listen(3000, function () {
    console.log('Server started on port 3000');
});
