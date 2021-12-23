var App 		= angular.module('App', ['ngRoute','ngSanitize']);
//Set url service app
var serviceApi		= 'http://gateway.marvel.com/v1/public/characters';
var GetServiceApi	= serviceApi;

App.run(function($rootScope, appService) {
	

	$rootScope.goURL = function(url){
		navigator.app.loadUrl(url, { openExternal:true });
		return false;
	} 
	
	if(typeof $rootScope.setting === 'undefined'){
		appService.HttpRequest('GET',GetServiceApi+'?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function(data) {
			$rootScope.setting 		= data;
		});
	}
});

App.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'view/hero.component.html',
            controller: 'heroController',
			activePage: 'home'
    	})
    	.when('/hero/:id', {
    		templateUrl: 'view/heros-details.component.html',
            controller: 'herosDetailController',
			activePage: 'hero'
    	})
});

//navCtrl definition
App.controller('navCtrl', function($scope, $route) {
    $scope.$route = $route;
});
