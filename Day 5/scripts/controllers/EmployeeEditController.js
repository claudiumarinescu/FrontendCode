hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    'EmployeeService', 'ManagerService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService, ManagerService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.jobs = [];
        $scope.departments = [];
        $scope.employees = [];
        $scope.managers = [];


        EmployeeService.findManagers()
            .then(
                function(payload) {
                    $scope.employees = payload.data;
                    $scope.managers = ManagerService.filterManagers($scope.employees);
            });

        EmployeeService.findJobs()
            .then(
                function(payload) {
                    $scope.jobs = payload.data;
            });

        EmployeeService.findDepartments()
            .then(
                function(payload) {
                    $scope.departments = payload.data;
            });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);