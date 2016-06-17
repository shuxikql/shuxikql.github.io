
dashboard.controller("FormController", ['$rootScope', '$scope', '$state', '$http','$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $http,$location, dashboardService, Flash) {
    var vm = this;

    vm.Deps = [
        {depname:"Department A"},
        {depname:"Department B"},
        {depname:"Department C"},
        {depname:"Department D"}
    ];
    vm.message = {};
    console.log("coming to Contact controller");

    vm.processForm = function(){
     //   console.log(vm.message);
        var request = $http({
            method: "post",
            url: "process.php",
            data: $.param(vm.message),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function(data){
            console.log(data);
            if(data == "false")
            {
                $scope.errorName = "Errors";
            }
            else
            {
                Flash.create('success', 'Form submiitted Succesfully', 'large-text');
                vm.message = {};
                vm.InfoForm.$pristine();
                vm.InfoForm.$setUntouched();
            }
        });
    };
}]);

