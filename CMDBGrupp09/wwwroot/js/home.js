document.querySelector('#fullPlot').style.display = "none"

if (document.querySelector('#subString').textContent === "N/A") {
    document.querySelector('#fullPlot').style.display = "inline";
    document.querySelector('#expand').style.display = "none";
    document.querySelector('#subString').style.display = "none";
}

document.querySelector('#expand').addEventListener("click", function () {

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






