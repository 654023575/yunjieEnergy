var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/law-manage', {
                templateUrl: './tpl/laws/law-manage.html'
            })
            .when('/law-check', {
                templateUrl: "./tpl/laws/law-check.html"
            })
            .when('/law-search', {
                templateUrl: './tpl/laws/law-search.html'
            })
            .when('/mon-power', {
                templateUrl: './tpl/monitor/mon-power.html'
            })
            .when('/mon-data', {
                templateUrl: './tpl/monitor/mon-data.html'
            })
            .when('/environ-mon', {
                templateUrl: './tpl/environment/environ-mon.html'
            })
            .when('/target-env', {
                templateUrl: './tpl/target/target-env.html'
            })
            .when('/target-data', {
                templateUrl: './tpl/target/target-data.html'
            })
            .when('/erengy-manage', {
                templateUrl: './tpl/equipment/energy-manage.html'
            })
            .when('/metering-manage', {
                templateUrl: './tpl/equipment/metering-manage.html'
            })
            .when('/equip-test', {
                templateUrl: './tpl/equipment/equip-test.html'
            })
            .when('/emerg-plan', {
                templateUrl: './tpl/emergency/emerg-plan.html'
            })
            .when('/emerg-drill', {
                templateUrl: './tpl/emergency/emerg-drill.html'
            })
            .when('/teach-train', {
                templateUrl: './tpl/teach/teach-train.html'
            })
            .when('/poll-source', {
                templateUrl: './tpl/pollution/poll-source.html'
            })
    }])

//法律法规管理controller
app.controller('lawManaCtrl', function ($scope,$http) {
    // 简单二级联动  
    $scope.sites1 = [
        // {"site":"请选择一级","children":[
        //     {"site":"请选择二级"}
        // ]},
        {
            "site": "法律法规", "children": [
                { "site": "国家法律" },
                { "site": "地方法律" },
                { "site": "行业法律" }
            ]
        },
        {
            "site": "标准规范", "children": [
                { "site": "国家标准" },
                { "site": "地方标准" },
                { "site": "行业标准" }
            ]
        },
        {
            "site": "上传文件", "children": [
                { "site": "单位文件" }
            ]
        }
    ];
    $scope.change = function (selected1, sites1) {
        angular.forEach(sites1, function (i, j) {
            if (selected1 == i.site) {
                $scope.sites2 = i.children;
            }
        })
    }
    //分页
});



        //法律审查controller
        app.controller('lawCheckCtrl', function ($scope) {
            // 简单二级联动  
            $scope.sites1 = [
                // {"site":"请选择一级","children":[
                //     {"site":"请选择二级"}
                // ]},
                {
                    "site": "法律法规", "children": [
                        { "site": "国家法律" },
                        { "site": "地方法律" },
                        { "site": "行业法律" }
                    ]
                },
                {
                    "site": "标准规范", "children": [
                        { "site": "国家标准" },
                        { "site": "地方标准" },
                        { "site": "行业标准" }
                    ]
                },
                {
                    "site": "上传文件", "children": [
                        { "site": "单位文件" }
                    ]
                }
            ];
            $scope.change = function (selected1, sites1) {
                angular.forEach(sites1, function (i, j) {
                    if (selected1 == i.site) {
                        $scope.sites2 = i.children;
                    }
                })
            }

        });

        //能源数据参数设定Ctrl
        app.controller('monPowerCtrl', function ($scope) {
            $scope.types = [
                { type: '电量', symbols: '度' },
                { type: '煤', symbols: '吨' },
                { type: '天然气', symbols: '立方米' },
                { type: '汽油', symbols: '升' }
            ];
            $scope.change = function (type1, types) {
                angular.forEach(types, function (i, j) {
                    if (type1 == i.type) {
                        $scope.symbols = i.symbols;
                    }
                })
            }
        });