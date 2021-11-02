let button = document.querySelector('#searchButton')
button.addEventListener("click", function() {
    const searchString = document.querySelector('#searchBox').value;
    searchOmdb(searchString)
});

async function searchOmdb(searchString) {
    try {
        let reponse1 = await fetch(`https://www.omdbapi.com/?apikey=750f36f6&t=${searchString}&plot=full`)
        let omdbmovie = await reponse1.json()
        let movieID = omdbmovie.imdbID
        let reponse2 = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}`)
        if (response2.status === 204) {
            document.querySelector('.cmdbNumbers').style.display = "none"
            //endast omdbfilmen skickas med till moviecontrollern

        }
        else {
            let cmdbMovie = await reponse2.json()
            document.querySelector('#cmdbInfo').style.display = "none"
            //både omdbfilmen och cmdbfilmen skickas med till moviecontrollern

        }
        
    } catch (e) {
        alert("det gick inte"); 
    }
}




