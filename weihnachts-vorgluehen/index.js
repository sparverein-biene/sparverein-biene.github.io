var images = ["Gluehwein.jpg", "hoftaverne.jpg"];
var idx = 0;

function roll() {
    idx++;
    if (idx == images.length) {
        idx = 0;
    }
    document.getElementById("rollover").src = images[idx];
    window.setTimeout(roll, 1000);
}

window.onload = function() {
    window.setTimeout(roll, 1000);
};