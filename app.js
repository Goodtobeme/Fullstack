
var express = require("express");
var bodyParser = require("body-parser");
var path =require()
var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res){
	res.sendFile(path.join(_dirname, "index.html"));

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});