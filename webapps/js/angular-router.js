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
            .when('/law-edit',{
                templateUrl:'./tpl/laws/law-edit.html'
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
app.controller('lawManaCtrl', function ($scope, $http) {
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

    $http.get('./law_file.json')
        .success(function (response) {
            $scope.names = response.law_file;
            console.log($scope.names)

            //分页总数
            $scope.pageSize = 5;
            $scope.pages = Math.ceil($scope.names.length / $scope.pageSize); //分页数
            $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
            $scope.pageList = [];
            $scope.selPage = 1;
            //设置表格数据源(分页)
            $scope.setData = function () {
                $scope.items = $scope.names.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
            }
            $scope.items = $scope.names.slice(0, $scope.pageSize);
            //分页要repeat的数组
            for (var i = 0; i < $scope.newPages; i++) {
                $scope.pageList.push(i + 1);
            }
            //打印当前选中页索引
            $scope.selectPage = function (page) {
                //不能小于1大于最大
                if (page < 1 || page > $scope.pages) return;
                //最多显示分页数5
                if (page > 2) {
                    //因为只显示5个页数，大于2页开始分页转换
                    var newpageList = [];
                    for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
                        newpageList.push(i + 1);
                    }
                    $scope.pageList = newpageList;
                }
                $scope.selPage = page;
                $scope.setData();
                $scope.isActivePage(page);
                console.log("选择的页：" + page);
            };
            //设置当前选中页样式
            $scope.isActivePage = function (page) {
                return $scope.selPage == page;
            };
            //上一页
            $scope.Previous = function () {
                $scope.selectPage($scope.selPage - 1);
            }
            //下一页
            $scope.Next = function () {
                $scope.selectPage($scope.selPage + 1);
            };

        })
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

//法律法规查询ctrl
app.controller('lawSearchCtrl', function ($scope) {
    $scope.myVar = true;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    }
})

//法律法规修改ctrl
app.controller('lawEditCtrl',function($scope){
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
})



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