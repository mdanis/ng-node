app.config(function($routeProvider) {

    $routeProvider
            .when('/board/:boardName/:containerId', {
                templateUrl: siteUrl + '/public/ng-app/templates/board-sitemap.html',
                controller: 'boardSitemapController'
            }).
            when('/board/:boardName/:classes/:containerId/:serviceId', {
                templateUrl: siteUrl + '/public/ng-app/templates/chapter-sitemap.html',
                controller: 'chapterSitemapController'
            })
});