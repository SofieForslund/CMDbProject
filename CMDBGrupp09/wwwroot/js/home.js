//från början är fullplot dold
let fullPlot = document.querySelector('#fullPlot')
fullPlot.style.display = "none"

//variabler
let subString = document.querySelector('#subString')
let expand = document.querySelector('#expand')
let button = document.querySelector('#searchButton')
let searchBox = document.querySelector('#searchBox')
let searchDiv = document.querySelector('#searchHits')
let string
let range = document.createRange()
let movieHitsDiv

//om ingen substring finns visas hela ploten
if (subString.textContent === "N/A") {
    fullPlot.style.display = "inline";
    expand.style.display = "none";
    subString.style.display = "none";
}

//klick på "read more"
expand.addEventListener("click", function () {

    if (fullPlot.style.display === "none") {

        fullPlot.style.display = "inline";
        expand.innerHTML = 'Read less';
        subString.style.display = "none";
    }
    else {
        fullPlot.style.display = "none";
        expand.innerHTML = 'Read more';
        subString.style.display = "inline";
    }
});

//klick på sökknappen
button.addEventListener("click", function () {
    const searchString = document.querySelector('#searchBox').value;
    searchBox.value = null
    searchDiv.innerHTML = null
    searchOmdb(searchString)
});



//fyller diven med sökresultat
function updateSearchDiv(string) {
    movieHitsDiv = range.createContextualFragment(string)
    searchDiv.appendChild(movieHitsDiv);
}

//skapar sökresultat
async function searchOmdb(searchString) {
    try {
        let reponse = await fetch(`https://www.omdbapi.com/?apikey=750f36f6&s=${searchString}&plot=full`)
        let omdbmovie = await reponse.json()

        for (let i = 0; i < 5; i++) {
            let imdbId = omdbmovie.Search[i].imdbID
            string = `
            <h1><a href="https://localhost:44319/Movie/Index/${imdbId}">${omdbmovie.Search[i].Title}</a></h1></br>
            <p>${omdbmovie.Search[i].Year}</p></br>
            <img src=${omdbmovie.Search[i].Poster} alt ="Film poster"/>`
            updateSearchDiv(string)
        };

    } catch (e) {
        if (searchString === '') {
            string = `
            <h1>You didn't write a searchterm, try again!</h1>`
            updateSearchDiv(string)

        }
        else {
            string = `
            <h1>Your search for ${searchString} generated no hits!</h1>`
            updateSearchDiv(string)
        }
    }
      
}






