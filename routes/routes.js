var appRouter = function(app) {
	// body...
	app.get("/", function(req,res) {
		// body...
		res.send("Hello World!");
	});

	app.get("/account", function(req,res) {
		// body...
		var accountMock = {
	        "username": "nraboy",
	        "password": "1234",
	        "twitter": "@nraboy"
    	}
		if(!req.query.username) {
			return res.send({"status":"error","message":"missing username"});
		} else if (req.query.username != accountMock.username) {
			return res.send({"status": "error","message":"wrong username"});
		} else {
			return res.send(accountMock);
		}
	});

	app.post("/account", function(req,res) {
		// body...
		if (!req.body.username || !req.body.password || !req.body.twtter) {
			return res.send({"status":"error","message":"missing a parameter"});
		} else {
			return res.send(req.body);
		}
	});
}

module.exports = appRouter;