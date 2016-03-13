myApp.controller('retiredController', ['$scope', '$location', function($scope, $location) {

    $scope.gotoRetired = function() {

        $location.path('/templates/retired2');
    }
    $scope.gotoComplete = function() {
        $location.path('/templates/retired3');
    }
    $scope.goBack = function() {
        $location.path('/templates/retired1');
    }

}]);
