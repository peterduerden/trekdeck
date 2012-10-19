var express = require('express'),
  card = require('./card');

// Path to our public directory
var pub = __dirname + '/public';

// setup middleware
var app = express();

//app.use(app.router);
//app.use(express.favicon(pub + '/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.static(pub));
app.use(express.errorHandler());

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');
app.locals.pretty = true;

// Root
app.get('/', card.index);

// Card
app.get('/card/:id', card.view);

app.listen(8080);
console.log('TrekDeck listening on port 8080');