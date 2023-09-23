"use strict";
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/getUsers/:users/:name", function (req, res) {
  var path = "C:\\Personal\\Vinodh\\MyProjects\\NodeProjects\\resources";
  // fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
  fs.readFile(path + "/" + "users.json", "utf8", function (err, data) {
    // console.log(path);
    res.end(data);
  });
});

app.get("/getDevices", function (req, res) {
  var path = "C:\\Personal\\MyProjects\\NodeProjects\\resources";
  // fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
  fs.readFile(path + "/" + "devices.json", "utf8", function (err, data) {
    console.log(path);
    res.end(data);
  });
});

app.get("/getRacks", function (req, res) {
  var path = "C:\\Personal\\MyProjects\\NodeProjects\\resources";
  // fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
  fs.readFile(path + "/" + "rack.json", "utf8", function (err, data) {
    // console.log(path);
    res.end(data);
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("User Management listening at http://%s:%s", host, port);
});
