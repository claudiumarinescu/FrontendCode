/**
 * Created by Claudiu.Marinescu on 6/30/2017.
 */

finalApp.controller('FormsController', ['$scope', function($scope) {

    $scope.checkNsubmit = function() {
        if ($scope.myForm.$valid) {
            $scope.myForm.$submitted = true;
            $scope.sub = true;
        } else {
            $scope.myForm.$submitted = false;
            $scope.sub = false;
        }
    }





    }]);