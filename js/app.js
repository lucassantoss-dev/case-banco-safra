var App 		= angular.module('App', ['ngRoute','ngSanitize']);
//Descrição de chamadas da API
var ts = 1640199267;
var apikey = '5a237863b3cc2061003cbbc4fe20dc06';
var hash = '4f9e92d166e63ca77eb9a2110d8bf479';
//Set url service app
var serviceApi		= 'https://gateway.marvel.com/v1/public/characters';
var GetServiceApi	= serviceApi;
var complemento		= '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479';


App.run(function($rootScope, appService) {
	

	$rootScope.goURL = function(url){
		navigator.app.loadUrl(url, { openExternal:true });
		return false;
	} 
	
	if(typeof $rootScope.setting === 'undefined'){
		appService.HttpRequest('GET',GetServiceApi + complemento).success(function(data) {
			$rootScope.setting 		= data;
		});
	}
});

App.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'view/hero.component.html',
            controller: 'heroController',
    	})
    	.when('/hero/:id', {
    		templateUrl: 'view/heros-details.component.html',
            controller: 'herosDetailController',
			activePage: 'hero'
    	})
		$routeProvider.otherwise({redirectTo: '/'});
});

