myApp.controller('memberController', ['$scope', '$location', '$ionicPopover', '$ionicSideMenuDelegate', function($scope,
    $location, $ionicPopover, $ionicSideMenuDelegate) {


    $scope.var = 1;
    $scope.click = function(num) {
        $scope.var = num;
    }

    $scope.gotoSaving = function() {

        $location.path('templates/saving');

    }
    $scope.gotoSubsidy = function() {

        $location.path('templates/subsidy');

    }
    $scope.goBackMember = function() {

        $location.path('templates/member');

    }
    $scope.benefitGraph = function() {

        $location.path('templates/benefit-graph');

    }
}]);
