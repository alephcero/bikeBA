//STYLES FOR FEATURES
// function getColor(d) {
//         return  d <= -1 ? '#3D299E' :
//         d >= -2  ? '#DE2331' :
//         //if none
//     '#FFFFFF';
// }

function getOpacity(opacidad) {
        return  opacidad <= -10 ? 1 :
        opacidad <= -6  ? .75 :
        opacidad <= -3.5  ? .50 :
        opacidad <= -1.4  ? .25 :
        opacidad <= -0.5  ? .1 :
        //if none
    '#FFFFFF';
}

function getColorTime(d) {
        return  d >= 53.6  ? '#ca0020' :
        d >= 38.7  ? '#f4a582' :
        d >= 29.9  ? '#f7f7f7' :        
        d >= 21.65  ? '#92c5de' :
        d >= 0 ? '#0571b0' :
        //if none
    '#FFFFFF';
}




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
        fillColor: 'MediumSpringGreen',
        weight: .5,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: getOpacity(feature.properties.AhorroMinutos)}
    }
})


//subway lines
var subwayLinesMarkers = {
    "color": "#F28C00",
    "weight": 5,
    "opacity": 1
};

var subwayLinesMap = L.geoJSON(subwayLines, {
    onEachFeature: onEachFeature,
    style: subwayLinesMarkers
})



//subway stations
var subwayStationsMarkers = {
    radius: 4,
    fillColor: "#F28C00",
    color: "#F28C00",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
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
    color: "#135AFF",
    weight: 1,
    opacity: .5,
    fillOpacity: 0.3
};

var oldStationsMap = L.geoJSON(oldStations, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, oldBikeStationsMarkers);
    }
})


// homesToBikes
var homesToBikesMarkers = {
    "color": 'lightcyan',
    "weight": 2,
    "opacity": .75,
    "dashArray": '3',
};

var homesToBikesMap = L.geoJSON(homesToBikes, {
    onEachFeature: onEachFeature,
    style: homesToBikesMarkers
})


// bikeToSubway

var bikeToSubwayMarkers = {
    "color": "darkcyan",
    "weight": 2,
    "dashArray": '3',
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
    color: "white",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var newStationsMap = L.geoJSON(newStations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, newBikeStationsMarkers);
    }
})


/* CSS - Cascading Style Sheet */
/* Palette color codes */
/* Palette URL: http://paletton.com/#uid=70X1q0kllll7F02ewaHsavZE5+U */

/* Feel free to copy&paste color codes to your application */


/* As hex codes */
//NARANAJA - SUBWAY
// .color-primary-0 { color: #AA8439 }  /* Main Primary color */
// .color-primary-1 { color: #000000 }
// .color-primary-2 { color: #55482F }
// .color-primary-3 { color: #FFB41F }
// .color-primary-4 { color: #FFAA00 }
//VERDE BIKE NEW
// .color-secondary-1-0 { color: #7B9F35 }  /* Main Secondary color (1) */
// .color-secondary-1-1 { color: #000000 }
// .color-secondary-1-2 { color: #44502C }
// .color-secondary-1-3 { color: #A8EE1C }
// .color-secondary-1-4 { color: #AAFF00 }
//ROSA - TIMES
// .color-secondary-2-0 { color: #882D61 }  /* Main Secondary color (2) */
// .color-secondary-2-1 { color: #000000 }
// .color-secondary-2-2 { color: #442537 }
// .color-secondary-2-3 { color: #CC187E }
// .color-secondary-2-4 { color: #FF0090 }
//AZUL- BIKE OLD
// .color-complement-0 { color: #2E4272 }   /* Main Complement color */
// .color-complement-1 { color: #000000 }
// .color-complement-2 { color: #222939 }
// .color-complement-3 { color: #244DAB }
// .color-complement-4 { color: #135AFF }



/* Generated by Paletton.com Â© 2002-2014 */
/* http://paletton.com */