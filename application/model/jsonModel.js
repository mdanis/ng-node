module.exports = function(app, connection) {
	return {

		getClassList : function(boardContainerId, callback) {

			var queryString = 'SELECT * FROM resource_rack rr left join rack_name on rack_name.rack_name_id = rr.rack_name_id  where rack_container_id= "' + boardContainerId + '" and rack_type_id ="3" order by rr.order asc';
			connection.query(queryString, function(err, rows, fields) {
				callback(err, rows);
			});

		},
		getSubjectList : function(classObj, callback) {
			var _counter = 0;
			if ( classObj instanceof Array) {

				var classArr = new Array();
				for (var i in classObj) {

					classArr.push({
						"rack_id" : classObj[i].rack_id,
						"name" : classObj[i].name
					});
					classArr[i].subjects = new Array();
					var subjectQryString = 'SELECT * FROM resource_rack rr left join rack_name on rack_name.rack_name_id = rr.rack_name_id  where rack_container_id= "' + classObj[i].rack_id + '" and rack_type_id ="4" ';

					connection.query(subjectQryString, function(err, subjRows, fields) {
						classArr[_counter].subjects = (subjRows);
						if (parseInt(_counter) + 1 == classObj.length) {
							callback(err, classArr)
						}
						_counter++;
					});
				}

			} else {
				
				var queryString = 'SELECT * FROM resource_rack rr left join rack_name on rack_name.rack_name_id = rr.rack_name_id  where rack_container_id= "' + classObj + '" and rack_type_id ="4" order by rr.order asc';
				connection.query(queryString, function(err, rows, fields) {
					callback(err, rows);
				});
			}
		},
		
		getChapterList: function(subjObj, callback){
			var _counter = 0;
			if ( subjObj instanceof Array) {

				var chapterArr = new Array();
				for (var i in subjObj) {

					chapterArr.push({
						"rack_id" : subjObj[i].rack_id,
						"name" : subjObj[i].name
					});
					chapterArr[i].chapters = new Array();
					var chapterQryString = 'SELECT * FROM resource_rack rr left join rack_name on rack_name.rack_name_id = rr.rack_name_id  where rack_container_id= "' + subjObj[i].rack_id + '" and rack_type_id ="5" ';

					connection.query(chapterQryString, function(err, chapterRows, fields) {
						chapterArr[_counter].chapters = (chapterRows);
						if (parseInt(_counter) + 1 == subjObj.length) {
							callback(err, chapterArr)
						}
						_counter++;
					});
				}
		}else{
		console.log("inside");	
		}
	}
}

};
