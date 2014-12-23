app.controller('mainController', function($scope, $http, $location, $routeParams) {
   
    if($routeParams.classes == 'undefined' || $routeParams.classes == undefined)
    location.hash='/board/cbse/5554';
});
app.controller('boardSitemapController', function($scope, $http, $location, $routeParams) {
    $scope.containerId = $routeParams.containerId;
    $scope.siteUrl = siteUrl;
	$http.get('/board-detail/'+$scope.containerId)
		.success(function(data) {
			//console.log(JSON.stringify((data)))
                  $scope.boardDetail = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
                $scope.getChapterDetail = function(classId,className){
                    location.hash='/board/cbse/'+className+'/'+$scope.containerId+'/'+classId;
                }
});
app.controller('chapterSitemapController', function($scope, $http, $location, $routeParams) {
   $http.get('/class-detail/'+$routeParams.containerId+'/'+$routeParams.serviceId)
		.success(function(data) {
			//console.log(JSON.stringify((data)))
                        $scope.classDetail = data.classList;
                        $scope.chapterDetail = data.chapterDetail;
                        $scope.selectedClass = $routeParams.classes;
                        $scope.redirectUrl = ' http://www.extramarks.com/website/index/dashboard/'+$routeParams.serviceId+'#/chapterDetails';
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
                $scope.getChapterDetail = function(classId,className){
                    location.hash='/board/cbse/'+className+'/'+$routeParams.containerId+'/'+classId;
                }
                
               
});