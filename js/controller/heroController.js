App.controller('heroController', function ($scope, $rootScope, appService) {
	var serviceApi = 'https://gateway.marvel.com/v1/public/characters';
	var GetServiceApi = serviceApi + '?limit=9&offset=';
	var complemento		= '&ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479';
	var maxCharacters = 1500;
	var offset = Math.floor((Math.random() * maxCharacters) + 1);

	$scope.LoadMoreData = function () {
		alert(1);
	}

	$rootScope.goReload = function () {
		$rootScope.loading = true;
		appService.HttpRequest('GET', + GetServiceApi + offset + complemento).success(function (data) {
			$scope.requestData = data.data.results;
			$rootScope.loading = false;
		});
	}

	appService.HttpRequest('GET', GetServiceApi + offset + complemento).success(function (data) {
		$scope.requestData = data.data.results;
	});
});