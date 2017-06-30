/**
 * Created by Claudiu.Marinescu on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$location', 'inputList',
    function($scope, $location, inputList) {

        $scope.inputList = inputList;
        $scope.user = {};

        $scope.back = function() {
            $location.url('/#');
        }

        $scope.resetInput = function() {
            $scope.user.fname = '';
            $scope.user.lname = '';
            $scope.user.cnp = '';
            $scope.user.age = '';
        }

        $scope.saveInput = function() {
            inputList.push(angular.copy($scope.user));
        }
    }
])