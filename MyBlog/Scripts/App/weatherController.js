(function () {
    
    var weatherController = function ($scope, weatherService, appConstants) {

        var liveWeatherResponse = function (response) {
            $scope.jsonData = response;
        }
        var onError = function (error) {
            $scope.error = appConstants.weatherNotFound;
        }

        weatherService.getliveWeatherByCity('6619279').then(liveWeatherResponse, onError);
    }
    var app = angular.module('mainApp');
    app.controller('weatherController', weatherController);

    app.config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
}());
