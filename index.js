mapboxgl.accessToken = "pk.eyJ1IjoiamFjamkiLCJhIjoiY2t2Y201OXV1YXh5dzMxbno0MWwwYm54dSJ9.61XHQPvjDPdgMmnohA_Hnw";

const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/jacji/clkilyoun00og01qf9ye6d2jj", // style URL
center: [45, -80], // starting position [lng, lat]
zoom: 13, // starting zoom
});
