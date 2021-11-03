document.querySelector('#fullPlot').style.display = "none"

document.querySelector('#expand').addEventListener("click", function () {

    let fullPlotMovie = document.querySelector('#fullPlot');
    let expandMovie = document.querySelector('#expand');
    let subStringMovie = document.querySelector('#subString');

    if (document.querySelector('#fullPlot').style.display === "none") {

        document.querySelector('#fullPlot').style.display = "inline";
        document.querySelector('#expand').innerHTML = 'Read less';
        document.querySelector('#subString').style.display = "none";
    }
    else {
        document.querySelector('#fullPlot').style.display = "none";
        document.querySelector('#expand').innerHTML = 'Read more';
        document.querySelector('#subString').style.display = "inline";
    }
});






