var map = L.map('map',{zoomControl:false}).setView([-34.615889, -58.442420], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);


//ESTO NO FUNCIONABA VOLVER A PONER
// var geocoder = L.Mapzen.geocoder('mapzen-fkPfGup');
// geocoder.addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


//MAP ELEMENTS

var improvementRadiosMap = L.geoJSON(improvementRadios, {
	onEachFeature: onEachFeature,
    style: function(feature) {
        return {
        fillColor: getColor(feature.properties.AhorroMinutos),
        weight: .5,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7}
    }
})


//subway lines
var subwayLinesMarkers = {
    "color": "#FF6200",
    "weight": 5,
    "opacity": 0.65
};

var subwayLinesMap = L.geoJSON(subwayLines, {
	onEachFeature: onEachFeature,
    style: subwayLinesMarkers
})



//subway stations
var subwayStationsMarkers = {
    radius: 4,
    fillColor: "#FF6200",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var subwayStationsMap = L.geoJSON(subwayStations, {
	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subwayStationsMarkers);
    }
})


//old bike stations
var oldBikeStationsMarkers = {
    radius: 4,
    fillColor: "#135AFF",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var oldStationsMap = L.geoJSON(oldStations, {
	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, oldBikeStationsMarkers);
    }
})


// homesToBikes
var homesToBikesMarkers = {
//    "color": "#AAFF00",
    "color": 'limeGreen',
    "weight": 5,
    "opacity": .75,
    "dashArray": '3',
};

var homesToBikesMap = L.geoJSON(homesToBikes, {
	onEachFeature: onEachFeature,
    style: homesToBikesMarkers
})


// bikeToSubway

var bikeToSubwayMarkers = {
    // "color": "#E47424",
    "color": "yellow",
    "weight": 5,
    "opacity": .75
};

var bikeToSubwayMap = L.geoJSON(bikeToSubway, {
	onEachFeature: onEachFeature,
    style: bikeToSubwayMarkers
})


//new bike stations
var newBikeStationsMarkers = {
    radius: 4,
    fillColor: "cyan",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var newStationsMap = L.geoJSON(newStations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, newBikeStationsMarkers);
    }
})


//ADDING TO MAP
improvementRadiosMap.addTo(map);
subwayLinesMap.addTo(map);
subwayStationsMap.addTo(map);
oldStationsMap.addTo(map);
homesToBikesMap.addTo(map);
bikeToSubwayMap.addTo(map);
newStationsMap.addTo(map);



/* CSS - Cascading Style Sheet */
/* Palette color codes */
/* Palette URL: http://paletton.com/#uid=70X1q0kllll7F02ewaHsavZE5+U */

/* Feel free to copy&paste color codes to your application */


/* As hex codes */
//NARANAJA - SUBWAY
// .color-primary-0 { color: #AA8439 }	/* Main Primary color */
// .color-primary-1 { color: #000000 }
// .color-primary-2 { color: #55482F }
// .color-primary-3 { color: #FFB41F }
// .color-primary-4 { color: #FFAA00 }
//VERDE BIKE NEW
// .color-secondary-1-0 { color: #7B9F35 }	/* Main Secondary color (1) */
// .color-secondary-1-1 { color: #000000 }
// .color-secondary-1-2 { color: #44502C }
// .color-secondary-1-3 { color: #A8EE1C }
// .color-secondary-1-4 { color: #AAFF00 }
//ROSA - TIMES
// .color-secondary-2-0 { color: #882D61 }	/* Main Secondary color (2) */
// .color-secondary-2-1 { color: #000000 }
// .color-secondary-2-2 { color: #442537 }
// .color-secondary-2-3 { color: #CC187E }
// .color-secondary-2-4 { color: #FF0090 }
//AZUL- BIKE OLD
// .color-complement-0 { color: #2E4272 }	/* Main Complement color */
// .color-complement-1 { color: #000000 }
// .color-complement-2 { color: #222939 }
// .color-complement-3 { color: #244DAB }
// .color-complement-4 { color: #135AFF }



/* Generated by Paletton.com Â© 2002-2014 */
/* http://paletton.com */