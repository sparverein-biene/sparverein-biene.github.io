var images = ["Gluehwein.jpg", "hoftaverne.jpg"];
var idx = 0;
var opacity = 100;
var delta = -10;

function roll() {
    opacity = opacity + delta;
    if (opacity > 100) {
        delta = -delta;
        opacity = 100 + delta;
    } else if (opacity < 0) {
        delta = -delta;
        opacit = delta;
        idx++;
        if (idx == images.length) {
            idx = 0;
        }
        document.getElementById("rollover").src = images[idx];
    }
    document.getElementById("rollover").style.filter = "alpha(opacity=" + opacity + ")";
    window.setTimeout(roll, 1000);
}

window.onload = function() {
    window.setTimeout(roll, 1000);
};