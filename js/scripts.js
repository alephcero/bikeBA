//STYLES FOR FEATURES
// function getColor(d) {
//         return  d <= -1 ? '#3D299E' :
//         d >= -2  ? '#DE2331' :
//         //if none
//     '#FFFFFF';
// }

function getColor(d) {
        return  d <= -1 ? 'magenta' :
        d >= -2  ? 'darkmagenta' :
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
