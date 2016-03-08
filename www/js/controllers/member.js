myApp.controller('memberController', ['$scope', '$location', '$ionicPopover', function($scope, $location, $ionicPopover) {


    $scope.var = 1;
    $scope.click = function(num) {
        $scope.var = num;
    }

    $scope.animation = 'slide-in-up';

    $ionicPopover.fromTemplateUrl('templates/menu.html', {
        scope: $scope,
        animation: $scope.animation
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.logOut = function() {

        $scope.popover.hide();
        $location.path('templates/home');

    }



}]);
