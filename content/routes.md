+++
title = "Ruter"
date = 2022-09-16
description = "Forskellige gode ruter at lave fælles cykeltur på i København."
draft = true
+++

Gode ruter til at lave Bilfri By Cykelture:

<div id="map">
</div>

<script>
    var map = L.map('map').setView([55.69, 12.568337], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    var latlngs = [
            [55.6, 12.568337],
            [55.69, 12],
            [55.69, 12.568337]
    ];

    var rute1 = L.polyline(latlngs).addTo(map);

    // zoom the map to the polyline

    
</script>