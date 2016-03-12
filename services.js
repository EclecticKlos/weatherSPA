// SERVICES
weatherApp.service('cityService', function() {
  this.city = "New York, NY";
})

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

}]);

