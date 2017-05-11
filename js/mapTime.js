var mapTime = L.map('mapTime',{zoomControl:false}).setView([-34.615889, -58.442420], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(mapTime);


L.geoJSON(censusBlocksTime, {
    onEachFeature: onEachFeature,
    style: function(feature) {
        return {
        fillColor: getColorTime(feature.properties.tiemposMin),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7}
    }
}).addTo(mapTime);


L.geoJSON(tranfersNeed, {
    onEachFeature: onEachFeature,
    style: function(feature) {
        return {
        fillColor: 'black',
        weight: 3,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.3}
    }
}).addTo(mapTime);


//LEGEND
var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0,21, 30, 39, 54],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorTime(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash; ' + grades[i + 1] + ' min <br>' : '+ min');
    }
    div.innerHTML += '<br> <br>' +
     '<i style="background:' + '#000000' + '"></i> ' +
     'Areas where transfer are mandatory' ;

    return div;
};

legend.addTo(mapTime);


