// using jQuery
function getCookie(name) {

    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
var csrftoken = getCookie('csrftoken');

/////////////////////







var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';




function initMap() {
    $.ajax({
        url: $("#url-map").attr("data-murl"),
        type: "post",
        //data: data1,
        crossDomain: false,
        dataType: "json",
        beforeSend: function (xhr, settings) {

            //alert("before send"+csrfSafeMethod(settings.type));
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {

                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        },
        success: function (data) {

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: {
                    lat: -28.024,
                    lng: 140.887
                }
            });

            var dat = JSON.parse(JSON.stringify(data.positions));
            var markers = dat.map(function (data, i) {
                return new google.maps.Marker({
                    position: {
                        lat: Number(data.lat),
                        lng: Number(data.lng)
                    },
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

        },

    });


    // Create an array of alphabetical characters used to label the markers.
    // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    //The map() method creates a new array with the results of calling a function for every array element.
    /*  var markers = locations.map(function (location, i) {
          return new google.maps.Marker({
              position: location,
              label: labels[i % labels.length]
          });
      });

      // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      });*/
}
