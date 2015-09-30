var connection = require('./mySqlDbConnection.js').dbConnection();
var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');


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

var resultRows;
var query = connection.query('SELECT * FROM articles', function(err, result){
    if(err){
        console.error(err);
        return;
    }
   //console.error(result);
    //console.log(result[0].id);
    resultRows = result;
    //res = result;
});

//var data = JSON.parse(res);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Limited Express',
      name: 'Arafat',
      data: resultRows
  });
});

module.exports = router;
