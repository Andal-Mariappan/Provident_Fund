// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic'])

myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            cache: false,
            url: '/templates/home',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .state('member', {
            cache: false,
            url: '/templates/member',
            templateUrl: 'templates/member.html',
            controller: 'memberController'
        })
        .state('logIn', {
            cache: false,
            url: '/templates/logIn',
            templateUrl: 'templates/logIn.html',
            controller: 'logInConfirmController'
        })
        .state('register', {
            url: '/templates/register',
            templateUrl: 'templates/register.html',
            controller: 'registerController'
        })
        .state('retired1', {
            cache: false,
            url: '/templates/retired1',
            templateUrl: 'templates/retired1.html',
            controller: 'retiredController'
        })
        .state('retired2', {
            url: '/templates/retired2',
            templateUrl: 'templates/retired2.html',
            controller: 'retiredController'
        })
        .state('retired3', {
            cache: false,
            url: '/templates/retired3',
            templateUrl: 'templates/retired3.html',
            controller: 'retiredController'
        })
        .state('menu', {
            url: '/templates/menu',
            templateUrl: 'templates/menu.html',
            controller: 'retiredController'
        })
        .state('providentFund', {
            cache: false,
            url: '/templates/providentFund',
            templateUrl: 'templates/providentFund.html'
        })
        .state('evalu1', {
            cache: false,
            url: '/templates/evalu1',
            templateUrl: 'templates/evalu1.html',
            controller: 'evaluController'
        })
        .state('evalu2', {
            cache: false,
            url: '/templates/evalu2',
            templateUrl: 'templates/evalu2.html',
            controller: 'evaluController'
        })
        .state('evaluComplate', {
            cache: false,
            url: '/templates/evaluComplate',
            templateUrl: 'templates/evaluComplate.html',
            controller: 'evaluController'
        })
        .state('FAQ', {
            cache: false,
            url: '/templates/FAQ',
            templateUrl: 'templates/FAQ.html',
            controller: 'FAQController'
        })
        .state('FAQDetail', {
            cache: false,
            url: '/templates/FAQDetail',
            templateUrl: 'templates/FAQDetail.html',
            controller: 'FAQController'
        })
        .state('saving', {
            cache: false,
            url: '/templates/saving',
            templateUrl: 'templates/saving.html',
            controller: 'memberController'
        })
        .state('subsidy', {
            cache: false,
            url: '/templates/subsidy',
            templateUrl: 'templates/subsidy.html',
            controller: 'memberController'
        })
        .state('statement', {
            cache: false,
            url: '/templates/statement',
            templateUrl: 'templates/statement.html',
        })
        .state('benefit-graph', {
            cache: false,
            url: '/templates/benefit-graph',
            templateUrl: 'templates/benefit-graph.html',
            controller:'memberController'
        })

    $urlRouterProvider.otherwise('/templates/home');

});
