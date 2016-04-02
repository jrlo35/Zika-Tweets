var express = require('express');
var http = require('http');
var https= require('https');
var Twit= require('twit');



var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

app.use(express.static(__dirname));//public
app.get('/', function(req,res){
	
	res.sendFile('index.html', {root: __dirname});
})
var params={ q: 'zika', count: 30 }
app.get('/api/tweets', function(req,res){
	var messages=[]
	T.get('search/tweets', params, function(err,data,response){
	
	  for(var i=0;i<data.statuses.length;i++){
  	    var status=data.statuses[i];
  	    messages.push({text:status.text,
  	              user: status.user.screen_name})
	}
    res.json(messages)
})
})

//http request
var T= new Twit({
    consumer_key: 'wQX96fSNXd5Oyo0mhw0AHto5u'
  , consumer_secret: 'shbjbyIGPVpopdw5FD3o1EtQNUwbAe5aVkkKg7pziLHPlnBH9x'
  , app_only_auth: true
});
//filter



// //get request
T.get('search/tweets', params, getTweets )

//return object
function getTweets(err, data, response) {
  for(var i=0;i<data.statuses.length;i++){
  	var status=data.statuses[i]
  	
    console.log(status.text)
    console.log(status.user.screen_name)
  }
}



// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}