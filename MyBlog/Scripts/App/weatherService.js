(function () {

    var liveWeatherService = function ($http) {
        return {
            getliveWeatherByCity: function (cityId) {
                var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?callback=JSON_CALLBACK&id=' + cityId;
                return $http.jsonp(apiUrl);
            }
        }
    };

    var app = angular.module('mainApp');
    app.factory('weatherService', liveWeatherService);

}());