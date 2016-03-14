myApp.controller('evaluController', ['$scope', '$location', '$ionicPopup',
    function($scope, $location, $ionicPopup) {

        $scope.gotoEvalu = function() {

            $location.path('/templates/evaluComplate');
        }
        $scope.gotoEvaluTest = function() {

            $location.path('/templates/evalu1');
        }

    }
]);
