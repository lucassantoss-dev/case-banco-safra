App.controller('herosDetailController', function ($scope, $rootScope, $routeParams, appService) {
	//Descrição de chamadas da API
	var ts = 1640199267;
	var apikey = '5a237863b3cc2061003cbbc4fe20dc06';
	var hash = '4f9e92d166e63ca77eb9a2110d8bf479';
	//serviços de chamada
	$scope.serviceApi = serviceApi;
    $rootScope.appTitle	 	= $routeParams.title;
	$scope.GetServiceApi = GetServiceApi;
	var complemento		= '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479';

    var requestParams = {
		"id": $routeParams.id
	};

	$scope.LoadMoreData = function () {
		alert(1);
	}

	$rootScope.goReload = function () {
		appService.HttpRequest('GET', GetServiceApi + '/' + complemento, requestParams).success(function (data) {
			$scope.requestData = data.data.results;
		});
	}

	appService.HttpRequest('GET', GetServiceApi + '/' + requestParams.id +  complemento).success(function (data) {
		$scope.requestData = data.data.results;
	});
});