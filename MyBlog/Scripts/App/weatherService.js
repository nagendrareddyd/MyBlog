(function () {

    var weatherLiveService = function ($http) {
        return {
            getliveWeatherByCity: function (cityId) {
                var urlApi = 'http://api.openweathermap.org/data/2.5/weather?callback=JSON_CALLBACK&units=metric&id=' + cityId;
                return $http.jsonp(urlApi);
                // cross domain issue - https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/
            }
        }
    };

    var app = angular.module('mainApp');
    app.factory('weatherService', weatherLiveService);

}());