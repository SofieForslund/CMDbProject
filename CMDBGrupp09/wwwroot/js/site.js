let button = document.querySelector('#searchButton')
button.addEventListener("click", function() {
    const searchString = document.querySelector('#searchBox').value;
    searchOmdb(searchString)
});

let cmdbmovie

async function searchOmdb(searchString) {
    try {
        let reponse1 = await fetch(`https://www.omdbapi.com/?apikey=750f36f6&s=${searchString}&plot=full`)
        let omdbmovie = await reponse1.json()

        //let movieID = omdbmovie.imdbID
        //let reponse2 = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}`)
        //if (response2.status === 204) {
        //    document.querySelector('.cmdbNumbers').style.display = "none"
        //    cmdbmovie = null;
        //}
        //else {
        //    cmdbmovie = await reponse2.json()
        //    document.querySelector('#cmdbInfo').style.display = "none"
        //}

        

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
        alert("det gick inte"); 
    }
}







