var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var sound = "";
	if (animal === "pig"){
		sound = "Oink";

	}
	else if (animal === "cow"){
		sound = "MOO"

	}
	else if (animal === "dog"){
		sound = "Woof";
	}
	res.send("The " + animal + " says " + sound);

});



app.get("*", function(req, res){
	res.send("Sorry page not found!!");
});

var port = process.env.PORT || 3000;
app.listen( process.env.PORT || 3000 , process.env.IP, () =>{
	console.log('Server listening on port 3000');
});