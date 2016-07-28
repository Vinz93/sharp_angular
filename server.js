var express = require('express');
var bodyParser = require('body-parser');
var mongoUtil = require('./app/mongoUtil');
var app = express();
var ObjectId = require('mongodb').ObjectID;

mongoUtil.connect();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/notes', function (req, res) {
  var notes = mongoUtil.notes();
  notes.find().toArray(function (err, docs) {
    if(err) throw err;
    res.json(docs);
  });
});

app.get('/notes/:id', function (req,res) {
  var notes = mongoUtil.notes();
  notes.find({"_id": new ObjectId(req.params.id)}).toArray(function (err, doc) {
    if(err) throw err;
    res.json(doc[0]);
  });
});

app.post('/notes', function (req, res) {
  var notes = mongoUtil.notes();
  notes.insertOne(req.body, function (err, r) {
    if(err) throw err;
    res.json(req.body);
  });
});

app.put('/notes/:id', function (req, res) {
  var notes = mongoUtil.notes();
  var updateNote = {
    title: req.body.title,
    description: req.body.description,
    category : req.body.category,
    user: { name: req.body.user.name}
  };
  notes.update({"_id": new ObjectId(req.params.id)}, {$set: updateNote}, { upsert: true}, function (err, doc) {
    if(err) throw err;
    res.json(req.body);
  });
});

app.delete('/notes/:id',function (req, res) {
  var notes = mongoUtil.notes();
  notes.remove({"_id": new ObjectId(req.params.id)},function (err, doc) {
    if(err) throw err;
    res.status(200);
  });
});

app.get('/users', function (req, res) {
  var users = mongoUtil.users();
  users.find().toArray(function (err, docs) {
    if(err) throw err;
    res.json(docs);
  });
});

app.get('/users/:id', function (req,res) {
  var users = mongoUtil.users();
  users.find({"_id": new ObjectId(req.params.id)}).toArray(function (err, doc) {
    if(err) throw err;
    res.json(doc[0]);
  });
});

app.get('/categories', function (req, res) {
  var categories = mongoUtil.categories();
  categories.find().toArray(function (err, docs) {
    if(err) throw err;
    res.json(docs);
  });
});

app.get('/categories/:id', function (req,res) {
  var categories = mongoUtil.categories();
  categories.find({"_id": new ObjectId(req.params.id)}).toArray(function (err, doc) {
    if(err) throw err;
    res.json(doc[0]);
  });
});


app.listen(3000, function () {
  console.log('Running on port 3000 ...');
});

// la collection no se puede llamar de manera global
