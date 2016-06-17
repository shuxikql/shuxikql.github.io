var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);

dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.form', {
        url: '/form',
        templateUrl: 'app/modules/dashboard/views/form.html',
        controller: 'FormController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form'
        }
    });

    //education page state
    $stateProvider.state('app.chart', {
        url: '/chart',
        templateUrl: 'app/modules/dashboard/views/chart.html',
        controller: 'ChartController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Charts Show'
        }
    });


    //Experience page state
    $stateProvider.state('app.table', {
        url: '/table',
        templateUrl: 'app/modules/dashboard/views/table.html',
        controller: 'TableController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Tables'
        }
    });


    //Contact page state
    $stateProvider.state('app.contact', {
        url: '/contact',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Contact Us'
        }
    });

    //Search page state
    $stateProvider.state('app.search', {
        url: '/search',
        templateUrl: 'app/modules/dashboard/views/search.html',
        controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Search'
        }
    });

}]);

