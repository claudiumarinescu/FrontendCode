/**
 * Created by Claudiu.Marinescu on 7/3/2017.
 */
hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.jobs = [];

        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };
        //
        // $scope.editEmployee = function(employeeId) {
        //     $location.url('/employeeEdit/' + employeeId);
        // };
        //
        // $scope.delete = function (employee) {
        //     $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'POST', data: employee})
        //         .success(function (data) {
        //             $location.url('/employeeList');
        //         });
        // };
    }]);