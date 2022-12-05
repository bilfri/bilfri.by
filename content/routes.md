+++
title = "Ruter"
date = 2022-09-16
description = "Forskellige gode ruter at lave fælles cykeltur på i København."
+++

Gode ruter til at lave Bilfri By Cykelture:

<div id="map">
</div>

<script type="text/javascript" src="/routes/route1.js"></script>
<script type="text/javascript" src="/routes/route0.js"></script>

<script>
    // create map variable
    var map = L.map('map').setView([55.69, 12.568337], 13);

    // import osm data
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    // create route variable from previously imported route data
    var rute1 = L.polyline(latlngs).addTo(map);
</script>