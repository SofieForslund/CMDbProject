document.querySelector('#fullPlot').style.display = "none"

document.querySelector('#expand').addEventListener("click", function () {

    let fullPlotMovie = document.querySelector('#fullPlot');
    let expandMovie = document.querySelector('#expand');
    let subStringMovie = document.querySelector('#subString');

    let substring = subStringMovie.textContent;

    if (document.querySelector('#expand').textContent === "Read more") {
        //fullPlotMovie.style.display = "inline";
        expandMovie.textContent = 'Read less';
        subStringMovie.textContent = fullPlotMovie.textContent;
    }
    else {
        //fullPlotMovie.style.display = "none";
        expandMovie.textContent = 'Read more';
        subStringMovie.textContent = substring;
    }
});





