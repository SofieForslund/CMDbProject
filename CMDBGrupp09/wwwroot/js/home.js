document.querySelector('#fullPlot').style.display = "none"

document.querySelector('#expand').addEventListener("click", function () {

    if (document.querySelector('#fullPlot').style.display === "none") {

        document.querySelector('#fullPlot').style.display = "inline";
        document.querySelector('#expand').innerHTML = 'Read less';
        document.querySelector('#dots').style.display = 'none';
        document.querySelector('#subString').style.display = 'none';
    }
    else {
        document.querySelector('#fullPlot').style.display = "none";
        document.querySelector('#expand').innerHTML = 'Read more';
        document.querySelector('#dots').style.display = 'inline';
        document.querySelector('#subString').style.display = 'inline';
    }
});

/*

let like = document.querySelector('#like')
like.addEventListener('click', function (e) {

})
*/
