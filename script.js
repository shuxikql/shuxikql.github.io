var showApp = angular.module('showApp', ['ngRoute']);

showApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/shoufa', {
			templateUrl : 'pages/home.html',
			controller : 'shoufaController'
		})

		.when('/dongtai', {
			templateUrl : 'pages/home.html',
			controller : 'dongtaiController'
		})

		.when('/zhuankan', {
			templateUrl : 'pages/home.html',
			controller : 'zhuankanController'
		});
});

showApp.directive('loading', ['$http', function($http)
{
	return{
		restrict: 'A',
		link: function(scope, elm, attrs)
		{
			scope.isLoading = function()
			{
				return $http.pendingRequests.length > 0;
			};

			scope.$watch(scope.isLoading, function(v){
				if(v){
					elm.show();
				}
				else{
					elm.hide();
				}
			});
		}
	};
}]);
// create the controller and inject Angular's $scope
showApp.controller('mainController', function($scope, $http) {
    $http.get("./json/home_json.txt").success(function(response){
    	$scope.id = response.id;
    	$scope.imgs = response.headers;
    	$scope.message = response.records;
    });

    $scope.s = 'a';
    $scope.selectNav = function(val){
		$scope.s = val;
	}

	$scope.setClass = function(item, index){
		if(index == 0){
			return "item active";
		}
		return "item";
	}
});

showApp.controller('shoufaController', function($scope,$http) {
    $http.get("./json/shoufa_json.txt").success(function(response){
    	$scope.id = response.id;
    	$scope.imgs = response.headers;
    	$scope.message = response.records;
    });
    
    $scope.setClass = function(item, index){
		if(index == 0){
			return "item active";
		}
		return "item";
	}
});

showApp.controller('dongtaiController', function($scope, $http) {
    $http.get("./json/dongtai_json.txt").success(function(response){
    	$scope.id = response.id;
    	$scope.imgs = response.headers;
    	$scope.message = response.records;
    });
    $scope.setClass = function(item, index){
		if(index == 0){
			return "item active";
		}
		return "item";
	}
});

showApp.controller('zhuankanController', function($scope, $http) {
    $http.get("./json/zhuankan_json.txt").success(function(response){
    	$scope.id = response.id;
    	$scope.imgs = response.headers;
    	$scope.message = response.records;
    });
    $scope.setClass = function(item, index){
		if(index == 0){
			return "item active";
		}
		return "item";
	}
});
