const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs = require("fs");
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static("pub"));

app.get("/comments", function(req, res) {
	res.end(fs.readFileSync(__dirname + "/pub/comment.txt", "utf8"));
})

app.post("/addcomment", urlencodedParser, function (req, res) {

  if (req.body.name.length == 0 || req.body.comment.length == 0)
    return;
  var text = " URL адрес: " + req.body.name + " Комментарий к сайту: " + req.body.comment;
  console.log("New comment\t=>\t" + text);
  fs.appendFile(__dirname + "/pub/comment.txt", text + "</br>\r\n");
  res.redirect("/");
  res.end();

});


app.listen(port, hostname, 3000)
{
  console.log('start');

};
