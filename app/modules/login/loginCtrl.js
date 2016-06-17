login.controller("loginCtrl", ['$rootScope', '$scope', '$state', '$location','$http','loginService','appSettings', 'Flash','apiService',
function ($rootScope, $scope, $state, $location, $stateProvider,$http, loginService, Flash, apiService, appSettings) {

        var vm = this;

        vm.getUser = {};
        vm.setUser = {};
        vm.signIn = true;

        //access login
        console.log("coming to Login controller");
    /*
        vm.login = function () {
            console.log(vm.getUser);
            var request= $http({
                method: "post",
                url: "login.php",
                data: $.param(vm.getUser),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            request.success(function(data){
                console.log("Return"+data);
                if(data) {
                    $state.go('app.dashboard');
                }
                else {
                    Flash.create('danger', 'Invalid Password & Username', 'large-text');
                }
            });
        };
        */

    vm.loginfuc = function () {
        //var request = $http({
        //    method:"post",
        //    url: "login.php",
        //    data: $.param(vm.getUser),
        //    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        //})
        //    .success(function(data){
        //        if(data) {
        //            $state.go('app.dashboard');
        //        }
        //        else {
        //            Flash.create('danger', 'Invalid Password & Username', 'large-text');
        //        }
        //    });


        if (vm.getUser.Username == "admin") {
            if (vm.getUser.Password == "admin") {
                $state.go('app.dashboard');
            }
            else
                Flash.create('danger', 'Invalid Password', 'large-text');
        }
        else
            Flash.create('danger', 'Invalid Username', 'large-text');

    };
        vm.register = function () {
        if (vm.setUser.confirmPassword == vm.setUser.Password){
            loginService.registerUser(vm.setUser).then(function (response) {
                if (response.message == 'success')
                    console.log('after post>>',response);
                //if (response.length > 0)
                //    $state.go('app');
                //else
                //    Flash.create('danger', 'Invalid Credentials', 'large-text');
            });
        }
    };

    }]);

