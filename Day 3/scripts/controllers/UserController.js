/**
 * Created by Claudiu.Marinescu on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$location', 'inputList',
    function($scope, $location, inputList) {

        $scope.inputList = inputList;

        $scope.back = function() {
            $location.url('/#');
        }

        $scope.resetInput = function() {
            $scope.fname = '';
            $scope.lname = '';
            $scope.cnp = '';
            $scope.age = '';
        }

        $scope.saveInput = function() {
            inputList.push({
                fname: $scope.fname,
                lname: $scope.lname,
                cnp: $scope.cnp,
                age: $scope.age
            })
        }
    }
])