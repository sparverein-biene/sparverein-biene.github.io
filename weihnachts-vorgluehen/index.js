var to = 120;
var mx = 400;
var images = ["Gluehwein.jpg", "hoftaverne.jpg"];
var idx = 0;
var opacity = 100;
var delta = -10;

function roll() {
    opacity = opacity + delta;
    if (opacity > mx) {
        delta = -delta;
        opacity = mx + delta;
    } else if (opacity < 0) {
        delta = -delta;
        opacit = delta;
        idx++;
        if (idx == images.length) {
            idx = 0;
        }
        document.getElementById("rollover").src = images[idx];
    }
    var fo = opacity;
    if (fo > 100) {
        fo = 100;
    }
    document.getElementById("rollover").style.opacity = fo / 100.0;
    document.getElementById("rollover").style.webkitOspacity = fo / 100.0;
    window.setTimeout(roll, to);
}

window.onload = function() {
    window.setTimeout(roll, to);
};