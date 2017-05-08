var map = L.map('map',{zoomControl:false}).setView([-34.615889, -58.442420], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

var geocoder = L.Mapzen.geocoder('mapzen-fkPfGup');
geocoder.addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


//improvementRadios
L.geoJSON(improvementRadios, {
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
}).addTo(map);




//subway lines
var subwayLinesMarkers = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(subwayLines, {
	onEachFeature: onEachFeature,
    style: subwayLinesMarkers
}).addTo(map);


//subway stations
var subwayStationsMarkers = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(subwayStations, {
	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, subwayStationsMarkers);
    }
}).addTo(map);

//old bike stations
var oldBikeStationsMarkers = {
    radius: 4,
    fillColor: "#1E6492",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(oldStations, {
	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, oldBikeStationsMarkers);
    }
}).addTo(map);





// homesToBikes
var homesToBikesMarkers = {
    "color": "#9E198E",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(homesToBikes, {
	onEachFeature: onEachFeature,
    style: homesToBikesMarkers
}).addTo(map);



// bikeToSubway

var bikeToSubwayMarkers = {
    "color": "#E47424",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(bikeToSubway, {
	onEachFeature: onEachFeature,
    style: bikeToSubwayMarkers
}).addTo(map);



//new bike stations
var newBikeStationsMarkers = {
    radius: 4,
    fillColor: "#168C83",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(newStations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, newBikeStationsMarkers);
    }
}).addTo(map);