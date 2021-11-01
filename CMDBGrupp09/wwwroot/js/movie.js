//let allaLikes = 

document.querySelector('#like').addEventListener("click", async function () {
    let response = await fetch('https://grupp9.dsvkurs.miun.se/api/Movie/tt1853728/like')
    if (response.status === 200) {
        //ladda siffrorna på nytt
        
    }
    else {

    }

    }
)

document.querySelector('#dislike').addEventListener("click", async function () {
    let response = await fetch('https://grupp9.dsvkurs.miun.se/api/Movie/tt1853728/dislike')
    if (response.status === 200) {
        //ladda siffrorna på nytt
    }
    else {

    }

}

)

//try {
//    //ska bilden inte gå att klickas (preventdefault?)
//    //awaita att liken blir skickad - var likadcmdbfilm = await repoOMDb.GetMovieAsync(movieID);
//    //när liken är skickad ska siffrorna uppdateras (skicka request för det?) await model = new MovieViewModel (omdb, cmdb)
//} catch (e) {


//}
