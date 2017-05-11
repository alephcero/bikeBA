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
