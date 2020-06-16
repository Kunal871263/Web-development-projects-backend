var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Wolf Creek", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=0.588xw:1.00xh;0.157xw,0&resize=640:*"},			{name: "Squire's Meadow", image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg"},
		{name: "Gwenstoe", image:"https://dmgupcwbwy0wl.cloudfront.net/system/images/000/359/254/6d1fcac1bbbf495bf883a16782303956/600gt/Malshej-Camping-1.jpg?1574591482"},
	{name: "Wolf Creek", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=0.588xw:1.00xh;0.157xw,0&resize=640:*"},			{name: "Squire's Meadow", image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg"},
		{name: "Gwenstoe", image:"https://dmgupcwbwy0wl.cloudfront.net/system/images/000/359/254/6d1fcac1bbbf495bf883a16782303956/600gt/Malshej-Camping-1.jpg?1574591482"},{name: "Wolf Creek", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-quotes-1556677391.jpg?crop=0.588xw:1.00xh;0.157xw,0&resize=640:*"},			{name: "Squire's Meadow", image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg"},
		{name: "Gwenstoe", image:"https://dmgupcwbwy0wl.cloudfront.net/system/images/000/359/254/6d1fcac1bbbf495bf883a16782303956/600gt/Malshej-Camping-1.jpg?1574591482"}

	];

app.get("/",function(req, res){
	res.render("landing");
});

app.get("/campgrounds",function(req, res){	
	res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampgrounds= {name: name, image: image};
	campgrounds.push(newCampgrounds);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req, res){
	res.render("new.ejs");
})

app.listen(process.env.PORT||3000, process.env.IP, function(){
	console.log("The YelpCamp Server has started!!");
});