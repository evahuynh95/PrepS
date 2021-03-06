var data = require("../evals.json");
var questionData = require ("../questions.json");
var info = require('../logininfo.json');

exports.viewHistory = function(req, res) { 
	var id = req.query.id;
	var pos;
	var curUserIdx = info['curUserIdx'];

	for( i = 0; i < data['answeredQuestion'].length; i++){
		var name = data['answeredQuestion'][i]['id'];
		if( name === id)
			pos = i;
	}
	var q = data['answeredQuestion'][pos]['question'];

	var lvl = parseInt(questionData['user'][curUserIdx]['level']);
	var lvlName = questionData['user'][curUserIdx]['levelNames'][lvl]['name'];

    res.render('evalshistory', {
    	"data" : questionData['user'][curUserIdx]['questionText'][id]['history'],
    	"levelName" : lvlName,
    	"question" : q
    });
};


exports.addHistory = function(req, res) { 
	var json = req.body;
	var id = parseInt(json['qNum']);
	var curUserIdx = info['curUserIdx'];

	questionData['user'][curUserIdx]['questionText'][id]['history'].push(json);
};
