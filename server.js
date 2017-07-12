var express = require('express')
var test = require('./test')

var app = express();

/*var mongoose = require('mongoose')
var bodyParser = require('body-parser');
*/
var port = process.env.PORT || 8080; // set our port

/*app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
*/
//connect
//app.use(express.static(__dirname + "/public"));
//mongoose.connect('mongodb://localhost/plot');
//console.log("Mongoose Connected");



//require('./routes/routes')(app);


app.get('/',function(req,res){
    res.send('Testing the App for the default route after the bower addition')
})



app.listen(port);
console.log('port ' + port); // shoutout to the user
test.te();
//exports = module.exports = app; // expose app