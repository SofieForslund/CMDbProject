


let readMoreHtml = document.querySelector('#expand')
    readMoreHtml.addEventListener("click", function (e) {

        var dots = document.getElementById("#dots");
        var fullPlot = document.getElementById("#fullPlot");
        var expand = document.getElementById("#expand");

        if (dots.style.display === "none") {
            dots.style.display = "block";
            expand.innerHTML = "Read more";
            fullPlot.style.display = "none";
        } else {
            dots.style.display = "none";
            expand.innerHTML = "Read less";
            fullPlot.style.display = "block";
        }

});
