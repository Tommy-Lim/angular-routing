angular.module('App')
.controller('HomeController', ['$scope','$state', function($scope, $state){
  $scope.name = 'Home page';
  $scope.changeState = function(){
    $state.go('profile', {message: 'Guy'});
  };
}])
.controller('ProfileController', ['$scope', '$stateParams', function($scope, $stateParams){
  $scope.name = 'Profile page';
  $scope.message = $stateParams.message;
}]);
