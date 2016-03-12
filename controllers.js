// CONTROLLERS
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

  var apiKey = "9432d86b98d17a9ea311ca6f751d6f60";

  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + ",us&cnt=" + $scope.days + "&APPID=" + apiKey, {callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  }

  console.log($scope.weatherResult);

}]);
