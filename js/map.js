var map = L.map('map',{zoomControl:false}).setView([-34.615889, -58.442420], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

var geocoder = L.Mapzen.geocoder('mapzen-fkPfGup');
geocoder.addTo(map);


//subway stations
