hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    'EmployeeService', 'ManagerService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeService, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $scope.jobs = [];
        $scope.departments = [];
        $scope.employees = [];
        $scope.managers = [];


        var promiseEmployees = EmployeeService.findManagers();
        promiseEmployees.then(
            function(payload) {
                $scope.employees = payload.data;
                $scope.managers = ManagerService.filterManagers($scope.employees);
        });

        var promiseJobs = EmployeeService.findJobs();
        promiseJobs.then(
            function(payload) {
                $scope.jobs = payload.data;
        });

        var promiseDeps = EmployeeService.findDepartments();
        promiseDeps.then(
            function(payload) {
                $scope.departments = payload.data;
        });



        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);