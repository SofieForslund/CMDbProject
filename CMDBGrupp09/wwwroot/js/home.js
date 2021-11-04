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

let button = document.querySelector('#searchButton')
button.addEventListener("click", function () {
    const searchString = document.querySelector('#searchBox').value;
    document.querySelector('#searchBox').value = null
    document.querySelector('#searchHits').innerHTML = null
    searchOmdb(searchString)
});

async function searchOmdb(searchString) {
    try {
        let reponse1 = await fetch(`https://www.omdbapi.com/?apikey=750f36f6&s=${searchString}&plot=full`)
        let omdbmovie = await reponse1.json()

        for (let i = 0; i < 5; i++) {
            let imdbId = omdbmovie.Search[i].imdbID
            let string = `
            <h1><a href="https://localhost:44319/Movie/Index/${imdbId}">${omdbmovie.Search[i].Title}</a></h1></br>
            <p>${omdbmovie.Search[i].Year}</p></br>
            <img src=${omdbmovie.Search[i].Poster} alt ="Film poster"/>`
            let range = document.createRange();
            let movieHitsDiv = range.createContextualFragment(string);
            document.querySelector('#searchHits').appendChild(movieHitsDiv);
        };

    } catch (e) {
        if (searchString === '') {
            let string = `
            <h1>Din sökning är tom! Prova igen</h1>`
            let range = document.createRange();
            let movieHitsDiv = range.createContextualFragment(string);
            document.querySelector('#searchHits').appendChild(movieHitsDiv);
        }
        else {
            let string = `
            <h1>Din sökning på ${searchString} fick ingen träff!</h1>`
            let range = document.createRange();
            let movieHitsDiv = range.createContextualFragment(string);
            document.querySelector('#searchHits').appendChild(movieHitsDiv);
        }

        
    }
}




