var app = angular.module('sitemap', ["ngRoute"]);

if (!window.location.origin)
   window.location.origin = window.location.protocol+"//"+window.location.host;
   siteUrl = window.location.origin;


app.filter('unsafe', function($sce) {

    return function(val) {

        return $sce.trustAsHtml(val);

    };

});