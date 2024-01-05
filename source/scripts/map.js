var map = L.map('map').setView([59.879882, 30.318662], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/map/map-marker.svg',
        iconSize:     [38, 50],
        shadowSize:   [0, 0],
        iconAnchor:   [0,0],
        shadowAnchor: [0, 0],
        popupAnchor:  [0, 0]
    }
});

var mapMarker = new LeafIcon({iconUrl: 'images/map/map-marker.svg'});

L.marker([59.879882, 30.318662], {icon: mapMarker}).addTo(map);
