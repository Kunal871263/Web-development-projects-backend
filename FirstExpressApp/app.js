var express = require("express");

var app = express();

app.get("/", function(req,res){
	res.send("hi there!");
});

app.get("/not", function(req,res){
	res.send("hi there NOT!!");
});

app.get("/:bye", function(req, res){
	console.log(req.params);
	res.send("goodbye!");
});

app.get("*", function(req, res){
	res.send("star");
});
var port = process.env.PORT || 3000;
app.listen( process.env.PORT || 3000 , process.env.IP, () =>{
	console.log('Server listening on port 3000');
});