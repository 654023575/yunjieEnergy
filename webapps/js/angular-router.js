var app = angular.module('myApp', ['ngRoute','oc.lazyLoad']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/law-manage',{
        templateUrl:'./tpl/laws/law-manage.html',
        reslove:{
            deps : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('js/app.js')
			} ]
        }
    })
    .when('/law-check',{
        templateUrl:"./tpl/laws/law-check.html"
    })
    .when('/law-search',{
        templateUrl:'./tpl/laws/law-search.html'
    })
    .when('/mon-power',{
        templateUrl:'./tpl/monitor/mon-power.html'
    })
    .when('/mon-data',{
        templateUrl:'./tpl/monitor/mon-data.html'
    })
    .when('/environ-mon',{
        templateUrl:'./tpl/environment/environ-mon.html'
    })
    .when('/target-env',{
        templateUrl:'./tpl/target/target-env.html'
    })
}])