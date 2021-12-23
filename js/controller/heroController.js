App.controller('heroController', function ($scope, $rootScope, appService) {
	$scope.serviceApi = serviceApi;
	$scope.GetServiceApi = GetServiceApi;

	$scope.LoadMoreData = function () {
		alert(1);
	}

	$scope.getSearch = function (event) {

		appService.HttpRequest('GET', GetServiceApi + '/' + event.target.value +  '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function (data) {
			$scope.requestData = data.data.results;
		});
	}

	$rootScope.goReload = function () {
		$rootScope.loading = true;
		appService.HttpRequest('GET', GetServiceApi + '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function (data) {
			$scope.requestData = data.data.results;
			$rootScope.loading = false;
		});
	}

	appService.HttpRequest('GET', GetServiceApi + '?ts=1640199267&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=4f9e92d166e63ca77eb9a2110d8bf479').success(function (data) {
		$scope.requestData = data.data.results;
	});
});