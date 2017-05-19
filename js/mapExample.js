var mapExample = L.map('mapExample',{zoomControl:false}).setView([-34.606275, -58.451974], 15);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(mapExample);

//ADDING TO MAP
improvementRadiosMap.addTo(mapExample);
subwayLinesMap.addTo(mapExample);
subwayStationsMap.addTo(mapExample);
oldStationsMap.addTo(mapExample);
homesToBikesMap.addTo(mapExample);
bikeToSubwayMap.addTo(mapExample);
newStationsMap.addTo(mapExample);


//LEGEND
var legend = L.control({position: 'topleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend example'),
        grades = [-10,-6,-3.5, -1.4, -0.5],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:MediumSpringGreen; opacity:' + getOpacity(grades[i] ) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash; ' + grades[i + 1] + ' min <br>' : '+ min');
    }
    div.innerHTML += '<br> <br>' +
     '<i style="background: #F28C00; border-radius: 15px;opacity:1' + '"></i> ' +
     'Subway stations' ;

    div.innerHTML += '<br>' +
     '<i style="background: #135AFF; border-radius: 15px;opacity:1; ' + '"></i> ' +
     'Current bike-share stations' ;

    div.innerHTML += '<br>' +
     '<i style="background: cyan; border-radius: 15px;opacity:1' + '"></i> ' +
     'New bike-share stations' ;

    div.innerHTML += '<br>  <br>' +
     '<i style="border: 1px dotted darkcyan; border-style: none none dotted; color: rgba(255,255,255,0.8); ' + '"></i> ' +
     'Bike to a Subway station' ;


    div.innerHTML += '<br> <br>' +
     '<i style="border: 1px dotted lighcyan; border-style: none none dotted; color: rgba(255,255,255,0.8); margin-bottom: 5px' + '"></i> ' +
     'Walk to a bike-share station' ;


    return div;


};

legend.addTo(mapExample);
