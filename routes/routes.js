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
			var out = JSON.stringify(db.collection('countries').findOne({"name":"India"})); 
			res.send(out);
		});

		db.close();
	});


}

module.exports = appRouter;