angular.module('slim').service('geolocationService', function () {

        
    var geolocationService = {
        getlocation : function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                for (var i = 0; i < results[0].address_components.length; i++) {
                                    var shortname = results[0].address_components[i].short_name;
                                    var longname = results[0].address_components[i].long_name;
                                    var type = results[0].address_components[i].types;
                                    if (type.indexOf("country") != -1) {
                                        if (!longname) {
                                            return longname;
                                        }
                                        else {
                                            return shortname;
                                        }
                                    }
                                }
                            }
                        }
                    });
                });
            } else {
                alert('Geolocation is not supported');
            }
       }
    }
    return geolocationService;
});