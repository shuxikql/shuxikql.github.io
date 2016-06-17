
app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
function ($rootScope, $scope, $state, $location, Flash,appSettings) {

    $rootScope.theme = appSettings.theme;
    $rootScope.layout = appSettings.layout;


    var vm = this;
   // vm.username =  $rootScope.getUser;

    //available layouts
    vm.layouts = [
        {
            name: "Boxed",
            layout: "layout-boxed"
        },
        {
            name: "Fixed",
            layout: "fixed"
        },
        {
            name: "Sidebar Collapse",
            layout: "sidebar-collapse"
        }
    ];


    //Main menu items of the dashboard
    vm.menuItems = [
        {
            title: "首页",
            icon: "home",
            state:"dashboard"
        },
        {
            title: "表单",
            icon: "edit",
            state: "form"
        },
        {
            title: "绘图",
            icon: "bar-chart",
            state: "chart"
        },
        {
            title: "联系人",
            icon: "user",
            state: "table"
        },
        {
            title: "联系我",
            icon: "phone",
            state: "contact"
        }
    ];


    //controll sidebar open & close in mobile and normal view
    vm.sideBar = function (value) {
        if($(window).width()<=767){
        if ($("body").hasClass('sidebar-open'))
            $("body").removeClass('sidebar-open');
        else
            $("body").addClass('sidebar-open');
        }
        else {
            if(value==1){
            if ($("body").hasClass('sidebar-collapse'))
                $("body").removeClass('sidebar-collapse');
            else
                $("body").addClass('sidebar-collapse');
            }
        }
    };

    console.log('getting in to the app controller');

}]);
