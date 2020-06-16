var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String, 
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
	
// Campground.create({name: "Squire's Meadow", image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg", description:"This a  meadow"},function(err, campground){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("newly created campgound:");
// 		console.log(campground);
// 	}
// })


app.get("/",function(req, res){
	res.render("landing");
});

app.get("/campgrounds",function(req, res){	
	Campground.find({}, function(err, allCampgrounds){
			if(err){
				console.log(err);
			} else{
				res.render("index", {campgrounds:allCampgrounds});
			}
	});
	//res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.decription;
	var newCampground= {name: name, image: image, description: desc};
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else{
			res.redirect("/campgrounds");
			console.log(newCampground);
		}
	});
	
});

app.get("/campgrounds/new",function(req, res){
	res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
	}	else{
			res.render("show", {campground: foundCampground});
	}				
	});

});

app.listen(process.env.PORT||3000, process.env.IP, function(){
	console.log("The YelpCamp Server has started!!");
});