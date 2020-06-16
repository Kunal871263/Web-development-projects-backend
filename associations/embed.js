var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email: "hermioni@hogwarts.edu",
// 	name: "Harmione Granger"
// });

// newUser.posts.push({
// 	title:"How to brew polyjuice potion",
// 	content: "Just kidding"
// });
// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}	else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apple",
// 	content: "They are delicious"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}	else{
// 		console.log(post);
// 	}
// });

User.findOne({name: "Harmione Granger"},function(err, user){
	if(err){
		// console.log(err);
	}	else {	
		user.posts.push({
			title: "3 things i really hate",
			content: "voldemort X3"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}	else{
				console.log(user);
			}
		});
	}
});




