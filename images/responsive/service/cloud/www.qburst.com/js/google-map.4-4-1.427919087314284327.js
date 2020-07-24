$(document).ready(function() {
    $(".mapbutton").click(function(e) {
        var buttonid = $(this).attr("id");
        var lc = $(".contact_tab li.active").attr("id");
        var lt = countryspecific[0][buttonid].lat;
        var lg = countryspecific[0][buttonid].lng;
        // $('html, body').animate({
        //     scrollTop:  $("#map_canvas").offset().top
        // }, 800);
        show_custom_google_map_for_contact(buttonid, 1, lc, lt, lg, 15);
    });
});

var jQ = $.noConflict();

var countryspecific = [{
    "Fairfax": { 'lat': "38.8582215", 'lng': '-77.3851351' },
    "Vazhuthacaud": { 'lat': "8.498837", 'lng': '76.957913' },
    "Tejaswini": { 'lat': "8.556715", 'lng': '76.882095' },
    "Pattom": { 'lat': "8.527984", 'lng': '76.939439' },
    "Ganga": { 'lat': "8.5478710", 'lng': '76.8791470' },
    "Kochi": { 'lat': "10.009932", 'lng': '76.365817' },
    "Koratty": { 'lat': "10.268479", 'lng': '76.353974' },
    "Calicut": { 'lat': "11.254940", 'lng': '75.828233' },
    "Australia": { 'lat': "-33.816695", 'lng': '151.000680' },
    "Singapore": { 'lat': "1.295279", 'lng': '103.859414' },
    "Chennai": { 'lat': "12.947915", 'lng': '80.232192' },
    "Japan": { 'lat': "35.647737", 'lng': '139.728913' },
    "UAE": { 'lat': "25.11695", 'lng': '55.39116' },
    "Salisbury": { 'lat': "51.012479", 'lng': '-1.650041' },
    "Sunnyvale": { 'lat': "37.323665", 'lng': '-122.021532' },
    "Stafford": { 'lat': "29.606744", 'lng': '-95.564448' },
    "Banglore": { 'lat': "12.9516322", 'lng': '77.6423483' }
}];

function show_contacts_tab(option) {
    var windw = document.body.clientWidth;
    optionid = option;
    optiontext = $('#' + optionid).text();
    contactContent = $('.contact_content');
    // if (contactContent.hasClass("americas")) {
    //     contactContent.removeClass("americas");
    // }
    // if (contactContent.hasClass("asiaPacific")) {
    //     contactContent.removeClass("asiaPacific");
    // }
    // if (contactContent.hasClass("europe")) {
    //     contactContent.removeClass("europe");
    // }
    // if (contactContent.hasClass("middleEast")) {
    //     contactContent.removeClass("middleEast");
    // }
    // if (contactContent.hasClass("southAsia")) {
    //     contactContent.removeClass("southAsia");
    // }
    // if (contactContent.hasClass("oceania")) {
    //     contactContent.removeClass("oceania");
    // }
    if ($('#' + optionid).hasClass("active")) {
        $('#' + optionid).siblings().removeClass("active");
        $("#postmapcont .subMenus .menuSelected li p span").text(optiontext);
        $('#' + optionid).addClass("active").siblings().removeClass("active");
        $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        $(".addrs_section ul li:first-child").mouseleave(function() {
            $(".addrs_section ul li:first-child").css({ "border-right": "1px dashed #cdcdcd", "border-bottom": "1px dashed #cdcdcd", "border-left": "1px solid transparent", "border-top": "1px solid transparent", "border-radius": "0" });
        })
        $(".addrs_section ul li").mouseover(function() {
            $(".addrs_section ul li:first-child").css({ "border-right": "1px dashed #cdcdcd", "border-bottom": "1px dashed #cdcdcd", "border-left": "1px solid transparent", "border-top": "1px solid transparent", "border-radius": "0" });
        })
        $(".addrs_section ul li:first-child").mouseover(function() {
            $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        })
        $(".addrs_section ul li").mouseleave(function() {
            $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        })
        $(".addrs_section.Asia-Pacific-Contacts ul li:nth-child(2)").mouseover(function() {
            $(".addrs_section.Asia-Pacific-Contacts ul li:first-child").addClass("japan");
        })
        $(".addrs_section.Asia-Pacific-Contacts ul li:nth-child(2)").mouseleave(function() {
            $(".addrs_section.Asia-Pacific-Contacts ul li:first-child").removeClass("japan");
        })
        if (windw < 1025) {
            $("#postmapcont .subMenus #mobMenuHolder").css("display", "block");
        }
    } else {
        $('#' + optionid).addClass("active").siblings().removeClass("active");
        var regionName = '#' + optionid;
        if (regionName == "#Americas") {
            contactContent.addClass("americas");
            contactContent.removeClass("asiaPacific");
            contactContent.removeClass("europe");
            contactContent.removeClass("middleEast");
            contactContent.removeClass("oceania");
            contactContent.removeClass("southAsia");
        }
        if (regionName == "#Asia-Pacific") {
            contactContent.addClass("asiaPacific");
            contactContent.removeClass("americas");
            contactContent.removeClass("europe");
            contactContent.removeClass("middleEast");
            contactContent.removeClass("oceania");
            contactContent.removeClass("southAsia");
        }
        if (regionName == "#Europe") {
            contactContent.addClass("europe");
            contactContent.removeClass("americas");
            contactContent.removeClass("asiaPacific");
            contactContent.removeClass("middleEast");
            contactContent.removeClass("oceania");
            contactContent.removeClass("southAsia");
        }
        if (regionName == "#Middle-East") {
            contactContent.addClass("middleEast");
            contactContent.removeClass("americas");
            contactContent.removeClass("asiaPacific");
            contactContent.removeClass("europe");
            contactContent.removeClass("oceania");
            contactContent.removeClass("southAsia");
        }
        if (regionName == "#South-Asia") {
            contactContent.addClass("southAsia");
            contactContent.removeClass("americas");
            contactContent.removeClass("asiaPacific");
            contactContent.removeClass("europe");
            contactContent.removeClass("middleEast");
            contactContent.removeClass("oceania");
        }
        if (regionName == "#Oceania") {
            contactContent.addClass("oceania");
            contactContent.removeClass("americas");
            contactContent.removeClass("asiaPacific");
            contactContent.removeClass("europe");
            contactContent.removeClass("middleEast");
            contactContent.removeClass("southAsia");
        }
        $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        $(".addrs_section ul li:first-child").mouseleave(function() {
            $(".addrs_section ul li:first-child").css({ "border-right": "1px dashed #cdcdcd", "border-bottom": "1px dashed #cdcdcd", "border-left": "1px solid transparent", "border-top": "1px solid transparent", "border-radius": "0" });
        })
        $(".addrs_section ul li").mouseover(function() {
            $(".addrs_section ul li:first-child").css({ "border-right": "1px dashed #cdcdcd", "border-bottom": "1px dashed #cdcdcd", "border-left": "1px solid transparent", "border-top": "1px solid transparent", "border-radius": "0" });
        })
        $(".addrs_section ul li:first-child").mouseover(function() {
            $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        })
        $(".addrs_section ul li").mouseleave(function() {
            $(".addrs_section ul li:first-child").css({ "border": "1px dashed #e2292f", "border-radius": "10px" });
        })
        $(".addrs_section.Asia-Pacific-Contacts ul li:nth-child(2)").mouseover(function() {
            $(".addrs_section.Asia-Pacific-Contacts ul li:first-child").addClass("japan");
        })
        $(".addrs_section.Asia-Pacific-Contacts ul li:nth-child(2)").mouseleave(function() {
            $(".addrs_section.Asia-Pacific-Contacts ul li:first-child").removeClass("japan");
        })

        $("#postmapcont .subMenus .menuSelected li p span").text(optiontext);
        if (windw < 1025) {
            $("#postmapcont .subMenus #mobMenuHolder").css("display", "block");
        }
    }
    if ($('.' + optionid + '-Contacts').hasClass("active")) {
        $('.' + optionid + '-Contacts').siblings().removeClass("active");
    } else {
        $('.' + optionid + '-Contacts').addClass("active").siblings().removeClass("active");
    }
    switch (optionid) {
        case 'Americas':
            var lt = "38.8582215";
            var lg = "-77.3851351";
            break;
        case 'Asia-Pacific':
            var lt = "-11.5";
            var lg = "107.5";
            break;
        case 'Europe':
            var lt = "52.197901";
            var lg = "11.205775";
            break;
        case 'Middle-East':
            var lt = "35.8582215";
            var lg = "87.3851351";
            break;
        case 'South-Asia':
            var lt = "34.0479";
            var lg = "100.6197";
            break;
        case 'Oceania':
            var lt = "22.7359";
            var lg = "140.0188";
            break;
        default:
            var lt = "-11.5";
            var lg = "107.5";

    };

    show_custom_google_map_for_contact(undefined, 0, optionid, lt, lg, 3);
    $ = jQ;
};


function show_custom_google_map_for_contact(ky, flag, loc, Lat, Lng, zoom, map_canvas_id, marker_image) {

    // set default values(values for QBurst India) for map customization.
    var flag = typeof flag !== 'undefined' ? flag : 0;
    var ky = typeof flag !== 'undefined' ? ky : 'Australia';
    var loc = typeof loc !== 'undefined' ? loc : 'Asia-Pacific';
    var Lat = typeof Lat !== 'undefined' ? Lat : -11.5;
    var Lng = typeof Lng !== 'undefined' ? Lng : 107.5;
    var zoom = typeof zoom !== 'undefined' ? zoom : 3;
    var map_canvas_id = typeof map_canvas_id !== 'undefined' ? map_canvas_id : 'map_canvas';
    var marker_image = typeof marker_image !== 'undefined' ? marker_image : '/images/company/contact/Map-Bubble.png';

    // Set markers for custom map based on the location
    var markers = [{
        "Tejaswini": { 'address': '<div class="mapInfoContent">\
         C22, Thejaswini<br/>\
         Technopark<br/>\
         Trivandrum - 695014<br/>', 'lat': "8.556715", 'lng': "76.882095" },
        "Vazhuthacaud": { 'address': '<div class="mapInfoContent"> \
         4th Floor, Artech Magnet<br/>\
         Vazhuthacaud <br/>\
         Trivandrum - 695014<br/>', 'lat': "8.498837", 'lng': '76.957913' },
        "Ganga": { 'address': '<div class="mapInfoContent"> \
         7th Floor, Ganga <br/>\
         Phase III Campus, Technopark<br/>\
         Trivandrum - 695583<br/>', 'lat': "8.5478710", 'lng': '76.8791470' },
        "Kochi": { 'address': '<div class="mapInfoContent"> \
         9th Floor, Lulu Cyber Tower<br/>\
         Infopark<br/>\
         Cochin - 682030<br/>', 'lat': "10.009932", 'lng': '76.365817' },
        "Koratty": { 'address': '<div class="mapInfoContent"> \
         Nisagandhi, Infopark<br/>\
         Koratty<br/>\
         Trichur - 680308<br/>', 'lat': "10.268479", 'lng': '76.353974' },
        "Calicut": { 'address': '<div class="mapInfoContent"> \
         5th Floor,<br/>\
         UL Cyber Park<br/>\
         Calicut - 673016<br/>', 'lat': "11.254940", 'lng': '75.828233' },
        "Japan": { 'address': '<div class="mapInfoContent"> \
         Oak Minami-Azabu Building 11F,<br/>\
         3-19-23 Minami-Azabu<br/>\
         Minato-ku, Tokyo 106-0047<br/>\
         Phone: +81 70 4130 1686', 'lat': "35.647737", 'lng': '139.728913' },
        "Chennai": { 'address': '<div class="mapInfoContent"> \
         2nd Floor, Module 5-B, Phase II <br/>\
         Chennai One IT SEZ <br/>\
         Chennai - 600097<br/>', 'lat': "12.947915", 'lng': '80.232192' },
        "Banglore": { 'address': '<div class="mapInfoContent"> \
         7th Floor, Fairway Business Park <br/>\
         Near EGL, Domlur <br/>\
         Bangalore - 560071<br/>\
         Phone: +91-806-193-9353', 'lat': "12.9516322", 'lng': '77.6423483' },
        "Australia": { 'address': '<div class="mapInfoContent"> \
        Level 40, Northpoint Tower<br/> \
        100 Miller Street<br/> \
        North Sydney<br/> \
        NSW 2060<br/> \ ', 'lat': "-33.837820", 'lng': '151.206630' },
        "Singapore": { 'address': '<div class="mapInfoContent"> \
         8 Temasek Boulevard<br>\
         #42-01, Suntec Tower Three<br>\
         Singapore 038988<br>\
         Phone: +65 9880 1029', 'lat': "1.295279", 'lng': '103.859414' }
    }];
    if (loc == 'Europe') {
        var markers = [{
            "Salisbury": { 'address': '<div class="mapInfoContent"> \
             Nunns Orchard, Dean Lane <br/> \
             Whiteparish <br/> \
             Salisbury, SP5 2RJ <br/>\
             Company No. 7495924<br/>\
             Phone:+44-114-360-3250<br/>', 'lat': "51.012479", 'lng': "-1.650041" }
        }];
    }
    if (loc == 'Americas') {
        var markers = [{
            "Fairfax": { 'address': '<div class="mapInfoContent">\
             14150 Newbrook Drive <br/>\
             Suite 115 <br/>\
             Chantilly, VA 20151 <br/>\
             Phone: +1-571-281-2720<br/>', 'lat': "38.874338", 'lng': "-77.435482" },
            "Stafford": { 'address': '<div class="mapInfoContent"> \
             920 FM 1092 <br/>\
             # 201 <br/>\
             Stafford, TX 77477<br/>\
             Phone: +1-512-730-0443', 'lat': "29.606744", 'lng': "-95.564448" },
            "Sunnyvale": { 'address': '<div class="mapInfoContent"> \
             19925 Stevens Creek Blvd<br>\
             Suite 100<br>\
             Cupertino, CA 95014<br/>\
             Phone: +1-408-868-2552', 'lat': "37.323665", 'lng': "-122.021532" }
        }];
    }
    if (loc == 'Middle-East') {
        var markers = [{
            "UAE": { 'address': '<div class="mapInfoContent">\
             E308, Dubai Silicon Oasis<br/>\
             Dubai <br/>\
             Phone: +971-4371-2632<br/>', 'lat': "25.11695", 'lng': "55.39116" }
        }];
    }

    var marker_title = 'QBurst ' + location;
    var compLatLng = new google.maps.LatLng(Lat, Lng);

    initializeQBContactMaps(ky, flag, markers, Lat, Lng, compLatLng, zoom, marker_title, map_canvas_id, marker_image);
}

function initializeQBContactMaps(ky, flag, markers, Lat, Lng, compLatLng, zoom, marker_title, map_canvas_id, marker_image) {

    var mapOptions = {
        center: compLatLng,
        zoom: zoom,
        scrollwheel: false,
        draggable: true,
        keyboardShortcuts: false,
        styles: [{ featureType: "landscape", stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }] }, { featureType: "poi", stylers: [{ saturation: -100 }, { lightness: 51 }, { visibility: "simplified" }] }, { featureType: "road.highway", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "road.arterial", stylers: [{ saturation: -100 }, { lightness: 30 }, { visibility: "on" }] }, { featureType: "road.local", stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: "on" }] }, { featureType: "transit", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "administrative.province", stylers: [{ visibility: "off" }] /**/ }, { featureType: "administrative.locality", stylers: [{ visibility: "off" }] }, { featureType: "administrative.neighborhood", stylers: [{ visibility: "on" }] /**/ }, { featureType: "water", elementType: "labels", stylers: [{ visibility: "on" }, { lightness: -25 }, { saturation: -100 }] }, { featureType: "water", elementType: "geometry", stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }] }],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };



    if (document.getElementById(map_canvas_id)) {
        var map = new google.maps.Map(document.getElementById(map_canvas_id), mapOptions);
        google.maps.event.addListener(map, 'click', function(e) {
            e.stopPropagation();
        });
    }

    var qbMarkerImage = new google.maps.MarkerImage(marker_image,
        new google.maps.Size(38, 35),
        new google.maps.Point(0, 0),
        new google.maps.Point(19, 35)
    );
    var infowindow = new google.maps.InfoWindow(),
        marker, i;
    var obj = markers[0];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            latlng = new google.maps.LatLng(val.lat, val.lng);
            map.setCenter(latlng);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.lat, val.lng),
                map: map,
                icon: qbMarkerImage,
                title: marker_title
            });
            google.maps.event.addListener(marker, 'click', (function(marker, key) {
                return function() {
                    infowindow.setContent(obj[key].address);
                    infowindow.open(map, marker);
                }
            })(marker, key));
        }
        if (flag == 1) {

            latlng = new google.maps.LatLng(obj[ky].lat, obj[ky].lng);
            map.setCenter(latlng);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(obj[ky].lat, obj[ky].lng),
                map: map,
                icon: qbMarkerImage,
                position: latlng,
                title: marker_title
            });
            infowindow.setContent(obj[ky].address);
            infowindow.open(map, marker);
        }
    }



}

function calcRoute() {
    var start = jQ("#start").val();
    var end = compLatLngStr;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            jQ('#directionsErr').show();
        }
    });
}