myApp.controller('memberController', ['$scope', '$location', function($scope, $location) {


    $scope.var = 1;
    $scope.click = function(num) {
        $scope.var = num;
    }

}]);
