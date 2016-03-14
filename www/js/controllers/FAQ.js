myApp.controller('FAQController', ['$scope', '$location', '$ionicPopover', '$ionicSideMenuDelegate', function($scope,
    $location, $ionicPopover, $ionicSideMenuDelegate) {



    $scope.gotoDetail = function() {

        $location.path('templates/FAQDetail');

    }
    $scope.gotoFAQ = function() {

        $location.path('templates/FAQ');

    }

}]);
