hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){

    $scope.employeeActionList=[];
    // TODO #12 - load menu items from Value
    for(var i in employeeActionsService)
        $scope.employeeActionList.push(employeeActionsService[i]);


    $scope.currentDate = new Date();


}]);
