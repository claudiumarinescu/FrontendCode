hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionsService',
    function ($scope, EmployeeActionsService, JobActionsService) {

        $scope.employeeActionList = EmployeeActionsService;
        $scope.currentDate = new Date();
        $scope.jobActionList = JobActionsService;

}]);
