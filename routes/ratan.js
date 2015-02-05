
/*
 * GET home page.
 */

var javascripts = require('./javascripts'); 

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.calculate = function(req,res){
	var input1=req.param('input1');
	var input2=req.param('input2');
	var operation=req.param('operation');
	console.log(input1);
	console.log(input2);
	console.log(operation);
	var result = javascripts.dosomething(input1,operation,input2);
	var u= {total: result};
	res.type('application/json');
	res.send(u);
	//res.render('index', { title: result });
};

exports.getJson=function(req,res){
	console.log("Entered to get api - getJson ");
	var jsonstr= {"total" : "30"};
	 res.type('application/json');
	res.send(jsonstr);
	//res.send(jsonstr);
};