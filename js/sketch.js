var mapImg;

var centerLat = 0;
var centerLon = 0;


//Beograd 44.7866° N, 20.4489° E
var lat = 44.7866;
var lon = 20.4489;

var zoom = 1;
var requestedData;

function preload() {

    //load map image
    mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/900x400?access_token=pk.eyJ1Ijoia2VlcHRoZWJyYWluIiwiYSI6ImNpejc5MWJuczAwMTEzMnA5amkwaWVqMmoifQ.OmvqUrYLs8BPl85MyYIYDw');

    //load data recieved
    requestedData = loadStrings(''); //figure out how to load twitter JSON data into this
}

// functions for calculating latitude and longitude
function mercX(lon){
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;

}

function mercY(lat){
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;

}


function setup(){
    createCanvas(900, 400);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapImg, 0, 0);

    var cx = mercX(centerLon);
    var cy = mercY(centerLat);


    for(var i = 0; i < dataLoad.length; i++){
        //.split(/,/) separates values by comma
        /*var data = dataLoad[i].split(/,/); */
        var lat = data[];
        var lon = data[];
        var tweetContent = data[];


    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;


    var d = map(magnitude, 0, 10, 0, 60);
    fill(255,0,255,200);
    ellipse(x, y, d, d);
    }
}
