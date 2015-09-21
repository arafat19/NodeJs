var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port     : 8889,
    database : 'test_db'
});

connection.connect();

var article ={
    author: 'Md Ibrahim Arafat',
    title: 'Mysql + NodeJs',
    body: 'Huge'
};

/*var query = connection.query('INSERT INTO articles SET ?', article, function(err, result){
    if(err){
        console.error(err);
        return;
    }
    console.error(result);
});*/
var id;
var query = connection.query('SELECT * FROM articles', function(err, result){
    if(err){
        console.error(err);
        return;
    }
   //console.error(result);
    //console.log(result[0].id);
    id = result;
    //res = result;
});

//var data = JSON.parse(res);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Limited Express',
      name: 'Arafat',
      data: id
  });
});

module.exports = router;
