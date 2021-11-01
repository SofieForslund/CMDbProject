document.querySelector('#ID').style.display = "none"




document.querySelector('#like').addEventListener("click", async function () {
    //let movieID = document.querySelector('#ID');
    let response = await fetch('https://grupp9.dsvkurs.miun.se/api/Movie/tt1853728/like')
    let movie = await response.json()
    await update(movie)

});



document.querySelector('#dislike').addEventListener("click", async function () {
    let response = await fetch('https://grupp9.dsvkurs.miun.se/api/Movie/tt1853728/dislike')
    let movie = await response.json()
    await update(movie)

});

function update(movie) {
    document.querySelector('#likeNumber').innerHTML = movie.numberOfLikes;
    document.querySelector('#dislikeNumber').innerHTML = movie.numberOfDislikes;
}

//try {
//    //ska bilden inte gå att klickas (preventdefault?)
//    //awaita att liken blir skickad - var likadcmdbfilm = await repoOMDb.GetMovieAsync(movieID);
//    //när liken är skickad ska siffrorna uppdateras (skicka request för det?) await model = new MovieViewModel (omdb, cmdb)
//} catch (e) {


//}
