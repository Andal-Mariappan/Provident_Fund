myApp.controller('evaluController', ['$scope', '$location', function($scope, $location) {

    $scope.gotoEvalu = function() {

        $location.path('/templates/evaluComplate');
    }
    $scope.gotoEvaluTest = function() {

        $location.path('/templates/evalu1');
    }

}]);
