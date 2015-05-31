// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', [
    'ionic', 'starter.controllers',
    
]);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state("app", {
        url: '/app',
        abstract: true,
        templateUrl: "Templates/Menu.html",
        controller: 'AppCtrl as _menu',
    })

    .state("app.home", {
        url: '/home',
        views: {
            'menuContent' : {
                templateUrl: "Views/Home/home.html",
                controller: 'HomeCtrl as _home', // --> Error here
            },
        },
    })

    .state("app.fruits", {
        url: '/fruits',
        views: {
            'menuContent' : {
                templateUrl: "Views/Fruits/list.html",
                controller: 'FruitsCtrl as _fruits',
            },
        },
    })

    .state("app.fruitOrange", {
        url: '/fruits/orange',
        views: {
            'menuContent' : {
                templateUrl: "Views/Fruits/orange/home.html",
                controller: 'OrangeCtrl as _orange',
            },
        },
    });

    $urlRouterProvider.otherwise('/app/home');
})
