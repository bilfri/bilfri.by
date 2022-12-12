    // create map variable
    var map = L.map('map').setView([55.69, 12.568337], 13);

    // import osm data
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    // create route variable from previously imported route data
    var polyline1 = L.polyline(latlngs1, {className: 'route1'}).addTo(map);

    var polyline2 = L.polyline(latlngs2, {className: 'route2'}).addTo(map);

    var polyline3 = L.polyline(latlngs3, {className: 'route3'}).addTo(map);

    var polyline4 = L.polyline(latlngs4, {className: 'route4'}).addTo(map);

    var polyline5 = L.polyline(latlngs5, {className: 'route5'}).addTo(map);

    var HansTavsensParkMarker = L.marker([55.68857, 12.54777]);
    HansTavsensParkMarker.bindPopup('Mødested: Hans Tavsens Park');
    HansTavsensParkMarker.addTo(map);

    //TODO: simplify -> https://webkid.io/blog/rarely-used-leaflet-features/