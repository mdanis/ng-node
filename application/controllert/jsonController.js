module.exports = function(app, connection) {
	var model = require('../model/jsonModel.js')(app, connection);

	app.get('/board-detail/:containerId', function(req, res) {
		var boardContainerId = req.params.containerId;

		model.getClassList(boardContainerId, function(err, rows) {
			model.getSubjectList(rows, function(err1, subjRows) {
				res.json(subjRows);

			})
		});

	});

	app.get('/class-detail/:containerId/:serviceId', function(req, res) {
		var boardContainerId = req.params.containerId;
		var boardClassId = req.params.serviceId;
		var classList;
		//getting classes list
		model.getClassList(boardContainerId, function(err, rows) {
			 classList = rows;
		});
		
		//getting subject list and corresponding chapters
		model.getSubjectList(boardClassId, function(err, subjRows){
			
			
			model.getChapterList(subjRows, function(err, chapterRows){
							res.json({classList:classList,chapterDetail:chapterRows});
						});
		});
		
		

	})
}
/*app.post('/api/todos', function(req, res) {
});*/

// application -------------------------------------------------------------
/*
 app.get('/', function(req, res) {
 var siteUrl = req.protocol + '://' + req.get('host');
 res.sendfile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
 });*/

