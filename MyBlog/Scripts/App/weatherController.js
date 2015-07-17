(function () {

    var weatherController = function ($scope, weatherService, appConstants) {
        var weatherResponseSuccess = function (response) {
            $scope.weatherData = {
                weatherIcon: 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png',
                name: response.data.name + ',' + response.data.sys.country,
                icon: response.data.weather[0].icon,
                temperature: response.data.main.temp,
                wind: response.data.wind.speed,
                clouds: response.data.clouds.all
            }
        }
        var onError = function (error) {
            $scope.error = appConstants.weatherNotFound;
        }

        $scope.getWeatherData = function (cityId) {
            weatherService.getliveWeatherByCity(cityId).then(weatherResponseSuccess, onError);
        }
    }
    var app = angular.module('mainApp');
    app.controller('weatherController', weatherController);

    app.config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
}());
