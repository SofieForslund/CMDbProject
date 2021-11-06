

//från början är fullplot dold
let fullPlot = document.querySelector('#fullPlot')
fullPlot.style.display = "none"
let searchResult = document.querySelector('#result')
searchResult.style.display = "none"

//variabler
let subString = document.querySelector('#subString')
let button = document.querySelector('#searchButton')
let searchBox = document.querySelector('#searchBox')
let elementString
let range = document.createRange()
let movieHitsDiv
let searchDiv = document.querySelector('#searchHits')
let counter
let response
let omdbmovieArray
let baseurlOmdb = 'https://www.omdbapi.com/?apikey=750f36f6&'
let formatForTesting = "/\d/"


//vi tänkte göra read more/less för alla filmer på hemsidan men iom foreach-loopen i index blev det svårt, vi hann inte
//om ingen substring finns visas hela ploten
if (subString.textContent === "N/A") {
    fullPlot.style.display = "inline";
    subString.style.display = "none";
}

//klick på "read more"
subString.addEventListener("click", function () {
    fullPlot.style.display = "inline";
    subString.style.display = "none";
});

//klick på "read less"
fullPlot.addEventListener("click", function () {
    fullPlot.style.display = "none";
    subString.style.display = "inline";
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
    searchResult.style.display = "inline";
}

//kollar om idsök ger någon träff
async function checkIfIdHit(searchString) {
    reponse = await fetch(`${baseurlOmdb}i=${searchString}&plot=full`)
    omdbmovieByID = reponse.json()
    return omdbmovieByID
}

//kollar om titelsök ger någon träff
async function checkIfTitleHit(searchString) {
    reponse = await fetch(`${baseurlOmdb}s=${searchString}&plot=full`)
    omdbmovieArrayByTitle = reponse.json()
    return omdbmovieArrayByTitle
}

//just nu kollas bara om det finns siffror men här hade man ju velat göra en riktig koll, alltså kolla om formatet stämmer för ImdbID
function HasCorrectIDFormat(searchString) { 
    return /\d/.test(searchString)
}

////om färre än 5 resultat, visa alla resultat
//function setCounter(omdbmovieArray) {
//    if (omdbmovieArray.Search.length < 5) {
//        return omdbmovieArray.Search.length
//    }
//    else {
//        return 5
//    }
//} x

//skapar sökresultat
async function searchOmdb(searchString) {
    try {

        if (HasCorrectIDFormat(searchString)) { 
            omdbmovieArray = await checkIfIdHit(searchString)

            if (omdbmovieArray.Response != "False") {
            elementString = `
            <a href="/Movie/Index/${searchString}"><img src=${omdbmovieArray.Poster} alt ="Film poster"/></a><br>
            <h1 style="font-size: x-large"><a href="/Movie/Index/${searchString}">${omdbmovieArray.Title}</a></h1>
            <p>${omdbmovieArray.Year}</p></br>`
            }
            
            else {
            elementString = `
            <h1>Your search for ${searchString} generated no hits!</h1>`
            }
        updateSearchDiv(elementString)
    }
        if (!(HasCorrectIDFormat(searchString)) && searchString != "") {
        try {
            omdbmovieArray = await checkIfTitleHit(searchString)
            /*counter = setCounter(omdbmovieArray)*/
            for (let i = 0; i < omdbmovieArray.Search.length; i++) {
                let imdbId = omdbmovieArray.Search[i].imdbID
                elementString = `
            <a href="/Movie/Index/${imdbId}"><img src=${omdbmovieArray.Search[i].Poster} alt ="Film poster"/></a><br>
            <h1 style="font-size: x-large"><a href="/Movie/Index/${imdbId}">${omdbmovieArray.Search[i].Title}</a></h1> 
            <p>${omdbmovieArray.Search[i].Year}</p></br>`
                updateSearchDiv(elementString)
            }

        } catch (e) {
            elementString = `
                <h1>Your search for ${searchString} generated no hits!</h1>`
            updateSearchDiv(elementString)

        }
    }
    if (searchString === "") {
        elementString = `
            <h1>You didn't write a searchterm, try again!</h1>`
        updateSearchDiv(elementString)
    }
    } catch (e) {
        alert("Something went wrong! Try again!")
    }
}



