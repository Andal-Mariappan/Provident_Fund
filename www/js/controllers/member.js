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

<<<<<<< HEAD
    $scope.logOut = function() {

        $scope.popover.hide();
        $location.path('templates/home');

    }


=======
>>>>>>> ce756549335a4f8fe575756499f703250857d071

}]);
