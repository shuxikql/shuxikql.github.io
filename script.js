var showApp = angular.module('showApp', ['ngRoute']);

showApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/shoufa', {
			templateUrl : 'pages/shoufa.html',
			controller : 'shoufaController'
		})

		.when('/dongtai', {
			templateUrl : 'pages/dongtai.html',
			controller : 'dongtaiController'
		})

		.when('/zhuankan', {
			templateUrl : 'pages/zhuankan.html',
			controller : 'zhuankanController'
		});
});

 
// create the controller and inject Angular's $scope
showApp.controller('mainController', function($scope, $http) {
 
    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!';
    $http.get("./json/home_json.txt").success(function(response){
    	$scope.message = response.records;
    });
    $scope.s = 'a';
    $scope.selectNav = function(val){
			$scope.s = val;
		}
});

showApp.controller('shoufaController', function($scope,$http) {
 
    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!hhh';
    
    $http.get("./json/shoufa_json.txt").success(function(response){
    	$scope.message = response.records;
    });
    
});

showApp.controller('dongtaiController', function($scope, $http) {
 
    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!mmm';
    $http.get("./json/dongtai_json.txt").success(function(response){
    	$scope.message = response.records;
    });
});

showApp.controller('zhuankanController', function($scope, $http) {
 
    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!www';
    $http.get("./json/zhuankan_json.txt").success(function(response){
    	$scope.message = response.records;
    });
});
