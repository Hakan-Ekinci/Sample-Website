var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");

var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");

var slide = 1;

function next() {
    slide++;
    if (slide == 2)


    {
        bild1.style.opacity = "0"
        bild2.style.opacity = "100%"

        text1.style.opacity = "0";
        text2.style.opacity = "100%";

    } else if (slide == 3) {
        bild2.style.opacity = "0";
        bild3.style.opacity = "100%";

        text2.style.opacity = "0";
        text3.style.opacity = "100%";
    } else {
        bild3.style.opacity = "0";
        bild1.style.opacity = "100%";

        text3.style.opacity = "0";
        text1.style.opacity = "100%";

        slide = 1;
    }
}