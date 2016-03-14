myApp.controller('evaluController', ['$scope', '$location', '$ionicPopup',
    function($scope, $location, $ionicPopup) {

        $scope.gotoEvalu = function() {

            $location.path('/templates/evaluComplate');
        }
        $scope.gotoEvalu1 = function() {

            $location.path('/templates/evalu1');
        }
        $scope.evaluTest = function() {
        	$location.path('/templates/evalu1');
        }
        $scope.gotoEvaluTest = function() {
        	$location.path('/templates/evalu2');
        }
    }
]);
