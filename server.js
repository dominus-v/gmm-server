var express = require('express'),
		cors = require('cors'),
		io = require('socket.io'),
		http = require('http'),
		morgan  = require('morgan'),
		fs = require('fs');

var nconf = require('nconf');
var clients = [];
var bridge;

var GMMServer = function() {

	// First consider commandline arguments and environment variables, respectively.
	nconf.argv().env();

	// Then load configuration from a designated file.
	nconf.file({ file: 'config.json' });

	// Provide default values for settings not provided above.
	/*nconf.defaults({
	    'http': {
	        'port': 8097
	    }
	});*/

	var port = nconf.get('http:port');

	var app = express(),
			baseDir = __dirname;

	app.configure(function() {
		app.use(cors());
		app.use(morgan('[:date] :method :url - :response-time'));
		app.use(express.static(baseDir + '/static/app'));
		app.use(express.json());
	});

	server = http.createServer(app);

	io = io.listen(server);
	server.listen(port);

	var wsOptions = {
		io: io,
		app: app,
		nconf: nconf
	};

	// Load Web Socket Server
	var WSServer = require("./wsServer");
	bridge = new WSServer(wsOptions)
	bridge.init();

	app.post('/api/v1/event/:session', function(req, res, next) {
		res.header('Content-Type', 'application/json');

		console.log("\n>>>");
		console.log("ORS Notify Event");
		console.log("Headers", req.headers);
		console.log("Params", req.params);
		console.log("Body",req.body);
		console.log("\n");

		bridge.sendEvent(req.params.session, req.body.event, req.body);
		res.json({response: 'done'});
		next();
	});

	app.post('/api/v1/orsevent/:session', function(req, res, next) {
		res.header('Content-Type', 'application/json');

		console.log("\n>>>");
		console.log("ORS Client Notify Event");
		console.log("Headers", req.headers);
		console.log("Params", req.params);
		console.log("Body",req.body);
		console.log("\n");

		bridge.sendOrsEvent(req.params.session, req.body.event, req.body);
		res.json({response: 'done'});
		next();
	});

	app.post('/api/v1/session/start', function(req, res, next) {
		res.header('Content-Type', 'application/json');
		console.log("\n>>>");
		console.log("ORS Notify Session");
		console.log("Headers", req.headers);
		console.log("\n");

		var orsSessionId = req.headers['x-ors-sessionid'];
		var shortCode = bridge.startOrsSession(orsSessionId);

		console.log("** ORS Session START:",orsSessionId,"Short Code:", shortCode);

		res.json({response: 'done', shortCode: shortCode});
		next();
	});

	app.post('/api/v1/session/end', function(req, res, next) {
		res.header('Content-Type', 'application/json');
		console.log("\n>>>");
		console.log("ORS Notify Session");
		console.log("Headers", req.headers);
		console.log("\n");

		var orsSessionId = req.headers['x-ors-sessionid'];
		var shortCode = bridge.stopOrsSession(orsSessionId);

		console.log("** ORS Session END:",orsSessionId,"Short Code:", shortCode);

		res.json({response: 'done'});
		next();
	});

	console.log("\n =============== Multi Modal Server is running at " + port + " ===============\n");
}

new GMMServer();
