myApp.controller('retiredController', ['$scope', '$location','$ionicPopup', 
	function($scope, $location,$ionicPopup) {

    $scope.gotoRetired = function() {

        $location.path('/templates/retired2');
    }
    $scope.gotoComplete = function() {
        $location.path('/templates/retired3');
    }
    $scope.goBack = function() {
        $location.path('/templates/retired1');
    }
    $scope.retiredPrompt = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="number" ng-model="data.evalu">',
            title: 'อายุปัจจุบัน',
            scope: $scope,
            buttons: [
                { text: 'Cancel' }, {
                    text: '<b>OK</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.evalu) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.evalu;
                        }
                    }
                }
            ]
        });
    }

}]);
