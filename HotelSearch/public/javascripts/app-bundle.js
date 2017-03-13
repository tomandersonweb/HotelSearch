(function () {

    var module = angular.module("app");

    module.component("hotelsComponent", {
        templateUrl: "app/components/hotels.component.html",
        controllerAs: "model",
        controller: ['$filter', controller]
    });

    function controller($filter) {

        var model = this;

        model.hotels =
            [
                {
                    "Name": "hotelone",
                    "StarRating": 5,
                    "Facilities": ["car park", "pool"]
                },
                {
                    "Name": "hoteltwo",
                    "StarRating": 3,
                    "Facilities": ["car park", "gym"]
                },
                {
                    "Name": "hotelthree",
                    "StarRating": 3,
                    "Facilities": []
                }
            ];

        model.createRange = function (r) {
            return new Array(r);
        };
    }

} ());