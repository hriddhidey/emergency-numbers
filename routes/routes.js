var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var appRouter = function(app) {
	// body...
	var url = 'mongodb://localhost:27017/numbers';
	mongodb.connect(url, function(err, db) {
		// body...
		assert.equal(null,err);
		console.log("Connected to db server.");

		app.get("/", function(req,res) {
			// body...
			res.send("Hello World!");
			
		});

		app.get("/countries", function(req, res) {
			// body...
			if(req.query.name == null) res.send("Incorrect or missing query parameters.");
			else {
				var name = req.query.name;
				db.collection('countries').findOne({"name":name}, function(err, doc) {
					// body...
					if(doc == null) console.log("Sorry! \n"+err);
					else {
						res.send(JSON.stringify(doc));
					}
				});
			}	
		});

		app.post("/countries", function(req, res) {
			var country = {
				name : "",
				all : "",
				police : "",
		        ambulance : "",
		        fire : "",
		        notes : "" 
			}
			country.name = req.body.name;
			country.all = req.body.all;
			country.police = req.body.police;
			country.ambulance = req.body.ambulance ;
			country.fire = req.body.fire;
			country.notes = req.body.notes;

			db.collection('countries').insertOne(country, function(err, response) {
				// body...
				if(err) console.log(err);
				else console.log(response);
			});
		});
	});


}

module.exports = appRouter;