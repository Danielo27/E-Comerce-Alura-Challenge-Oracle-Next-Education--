/*first presentation*/
let count = 1;
/*Every 7 seconds*/
setInterval(slider, 7000);

function slider() {
    let presentation = document.querySelectorAll(".section__banner");
    if (count > (presentation.length - 1)) {
        count = 0;
    }

    for (var x = 0; x < presentation.length; x++) {
        presentation[x].style.display = "none";
    }
    presentation[count].style.display = "block";
    count++;
}

/*Basic Slider By Daniel Quintero Henriquez
  Challenge Alura Latam
  Oracle One Next Education*/