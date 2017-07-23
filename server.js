var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

app.use("/api/v1", restRouter);

app.use("/:shortUrl", redirectRouter);
//app.get("/", function (req, res) {
//    res.send("hello express world");
//});


app.listen(3000);

//var http = require('http');
//var fs = require('fs');
//
//http.createServer(function (req, res) {
//    if (req.url === "/") {
//        res.writeHead(200, {"Content-Type": "text-html"});
//        var html = fs.readFileSync(__dirname + "/index.html");
//        res.end(html);
//    }
//
//    if (req.url === "/api") {
//        res.writeHead(200, {"Content-Type": "application/json"});
//        var obj = {
//            name: "Yi Miao",
//            age: 12
//        }
//        res.end(JSON.stringify(obj));
//    }
//}).listen(3000);