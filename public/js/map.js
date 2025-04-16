
mapboxgl.accessToken = mapToken;
  
const map = new mapboxgl.Map({
    container: "map", 
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 12,
});

const marker = new mapboxgl.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset: 25}).setHTML(
                `<h4>${listing.location}</h4>`
            )
        )
.addTo(map); 