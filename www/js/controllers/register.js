myApp.controller('registerController', ['$scope', '$location', function($scope, $location) {

$scope.register = function(){

    alert("Success.");
    $location.path('/templates/home');
}

$scope.connectWithFB = function(){

    alert("Connect with facebook.");
}

}]);
