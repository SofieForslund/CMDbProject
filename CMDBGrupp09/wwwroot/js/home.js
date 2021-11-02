document.querySelector('#fullPlot').style.display = "none"

document.querySelector('#expand').addEventListener("click", function() {

    let fullPlotMovie = document.querySelector('#fullPlot');
    let expandMovie = document.querySelector('#expand');
    let dotsMovie = document.querySelector('#dots');
    let subStringMovie = document.querySelector('#subString');

    if (document.querySelector('#fullPlot').style.display === "none") {

        fullPlotMovie.style.display = "inline";
        expandMovie.innerHTML = 'Read less';
        dotsMovie.style.display = 'none';
        subStringMovie.style.display = 'none';
    }
    else {
        fullPlotMovie.style.display = "none";
        expandMovie.innerHTML = 'Read more';
        dotsMovie.style.display = 'inline';
        subStringMovie.style.display = 'inline';
    }
});







