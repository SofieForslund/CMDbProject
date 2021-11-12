


let fullPlot = document.querySelector('#fullPlot')
fullPlot.style.display = "none"
let searchResult = document.querySelector('#result')
searchResult.style.display = "none"


let subString = document.querySelector('#subString')
let button = document.querySelector('#searchButton')
let searchBox = document.querySelector('#searchBox')
let apikeyBox = document.querySelector('#apiKey')
let elementString
let range = document.createRange()
let movieHitsDiv
let searchDiv = document.querySelector('#searchHits')
let counter
let response
let omdbmovieArray

let formatForTesting = "/\d/"



if (subString.textContent === "N/A") {
    fullPlot.style.display = "inline";
    subString.style.display = "none";
}


subString.addEventListener("click", function () {
    fullPlot.style.display = "inline";
    subString.style.display = "none";
});


fullPlot.addEventListener("click", function () {
    fullPlot.style.display = "none";
    subString.style.display = "inline";
});


button.addEventListener("click", function () {
    const searchString = document.querySelector('#searchBox').value;
    searchBox.value = null
    apikeyBox.value = null
    searchDiv.innerHTML = null
    const apiKey = document.querySelector('#apiKey').value;
    const baseurlOmdb = `https://www.omdbapi.com/?apikey=${apiKey}&`
    searchOmdb(searchString, baseurlOmdb)
});


function updateSearchDiv(string) {
    movieHitsDiv = range.createContextualFragment(string)
    searchDiv.appendChild(movieHitsDiv);
    searchResult.style.display = "inline";
}


async function checkIfIdHit(searchString, baseurlOmdb) {
    reponse = await fetch(`${baseurlOmdb}i=${searchString}&plot=full`)
    omdbmovieByID = reponse.json()
    return omdbmovieByID
}


async function checkIfTitleHit(searchString, baseurlOmdb) {
    reponse = await fetch(`${baseurlOmdb}s=${searchString}&plot=full`)
    omdbmovieArrayByTitle = reponse.json()
    return omdbmovieArrayByTitle
}


function HasCorrectIDFormat(searchString) { 
    return /\d/.test(searchString)
}

async function searchOmdb(searchString, baseurlOmdb) {
    try {

        if (HasCorrectIDFormat(searchString)) { 
            omdbmovieArray = await checkIfIdHit(searchString, baseurlOmdb)

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
            omdbmovieArray = await checkIfTitleHit(searchString, baseurlOmdb)
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



