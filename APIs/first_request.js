const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
	if(!error && response.statusCode == 200){
		const parsedData = JSON.parse(body);
		console.log(parsedData.name + " lives in " + parsedData.address.city);
	}
});

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
// 	if(error){
// 		console.log("something went wrong");
// 	}
// 	else{
// 		if(response.statusCode == 200){
// 			//Things worked
// 			console.log(body);
// 		}
// 	}
// });