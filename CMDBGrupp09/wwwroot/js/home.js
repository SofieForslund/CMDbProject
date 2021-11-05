

//från början är fullplot dold
let fullPlot = document.querySelector('#fullPlot')
fullPlot.style.display = "none"
let searchResult = document.querySelector('#result')
searchResult.style.display ="none"

//variabler
let subString = document.querySelector('#subString')
let button = document.querySelector('#searchButton')
let searchBox = document.querySelector('#searchBox')
let string
let range = document.createRange()
let movieHitsDiv
let searchDiv = document.querySelector('#searchHits')
let counter
let response
let omdbmovieArray
let baseurlOmdb = 'https://www.omdbapi.com/?apikey=750f36f6&'


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



//skapar sökresultat
async function searchOmdb(searchString) {
    try {
        reponse = await fetch(`${baseurlOmdb}s=${searchString}&plot=full`)
        omdbmovieArray = await reponse.json()
        if (omdbmovieArray.Response === 'True') { //om det blir en träff på filmnamn
            counter = setCounter(omdbmovieArray)
            for (let i = 0; i < counter; i++) {
                let imdbId = omdbmovieArray.Search[i].imdbID
                string = `
            <a href="/Movie/Index/${imdbId}"><img src=${omdbmovieArray.Search[i].Poster} alt ="Film poster"/></a><br>
            <h1 style="font-size: x-large"><a href="/Movie/Index/${imdbId}">${omdbmovieArray.Search[i].Title}</a></h1> 
            <p>${omdbmovieArray.Search[i].Year}</p></br>`
                updateSearchDiv(string)
            }
        }
        else {
            reponse = await fetch(`${baseurlOmdb}i=${searchString}&plot=full`)
            omdbmovieArray = await reponse.json()
            if (omdbmovieArray.Response === 'True') { // om det blir en träff på filmID
                string = `
            <a href="/Movie/Index/${searchString}"><img src=${omdbmovieArray.Poster} alt ="Film poster"/></a><br>
            <h1 style="font-size: x-large"><a href="/Movie/Index/${searchString}">${omdbmovieArray.Title}</a></h1>
            <p>${omdbmovieArray.Year}</p></br>`
                updateSearchDiv(string)
            }
        }
        
        //om användaren inte skrivit nåt i sökrutan
        if (searchString === '') {
            string = `
            <h1>You didn't write a searchterm, try again!</h1>`
            updateSearchDiv(string)
        } 
              
    } catch (e) { //om det inte blir några träffar
     string = `
     <h1>Your search for ${searchString} generated no hits!</h1>`
     updateSearchDiv(string)
    }

}

//om färre än 5 resultat, visa alla resultat
function setCounter(omdbmovieArray) {
    if (omdbmovieArray.Search.length < 5) {
        return omdbmovieArray.Search.length
    }
    else {
        return 5
    }
}
