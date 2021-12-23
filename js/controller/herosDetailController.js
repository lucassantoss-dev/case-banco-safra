App.controller('herosDetailController', function ($scope, $rootScope, $routeParams, appService) {
	$scope.serviceApi = serviceApi;
    $rootScope.appTitle	 	= $routeParams.title;
	$scope.GetServiceApi = GetServiceApi;

    var requestParams = {
		"id": $routeParams.id
	};

	$scope.LoadMoreData = function () {
		alert(1);
	}

	$rootScope.goReload = function () {
		appService.HttpRequest('GET', GetServiceApi + '/' + requestParams, '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function (data) {
			$scope.requestData = data.data.results;
		});
	}

	appService.HttpRequest('GET', GetServiceApi + '/' + requestParams.id + '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function (data) {
		$scope.requestData = data.data.results;
	});
});