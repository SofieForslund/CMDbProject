let button = document.querySelector('#searchButton')
button.addEventListener("click", function() {
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
        let string = `
            <h1>Din sökning på ${searchString} fick ingen träff!</h1>`
        let range = document.createRange();
        let movieHitsDiv = range.createContextualFragment(string);
        document.querySelector('#searchHits').appendChild(movieHitsDiv);
    }
}







