angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('profile', {
      url: '/profile/:message',
      templateUrl: 'views/profile.html',
      controller: 'ProfileController'
    });


  }
]);
