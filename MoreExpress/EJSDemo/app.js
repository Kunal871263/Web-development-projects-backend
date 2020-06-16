var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/fallinlove/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});

});

app.get("/posts", function(req, res){
	var posts = [
		{title :"Post1", author :"susy"},
		{title :"asdf" , author :"ghjk"},
		{title : "qwer", author :"zxcv"}
	];
	res.render("posts", {posts : posts});
});

app.listen( process.env.PORT || 3000 , process.env.IP, () =>{
	console.log('Server listening on port 3000');
});