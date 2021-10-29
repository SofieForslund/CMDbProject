


let readMoreHtml = document.querySelector('#expand')
    readMoreHtml.addEventListener("click", function (e) {

        var dots = document.getElementById("#dots");
        var fullPlot = document.getElementById("#fullPlot");
        var expand = document.getElementById("#expand");
        var subString = document.getElementById("#subString")

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            subString.style.display = "inline";
            expand.innerHTML = "Read more";
            fullPlot.style.display = "none";
        } else {
            dots.style.display = "none";
            subString.style.display = "none";
            expand.innerHTML = "Read less";
            fullPlot.display = "inline"
        }

});

let like = document.querySelector('#like')
like.addEventListener("click", function (e) {

})

