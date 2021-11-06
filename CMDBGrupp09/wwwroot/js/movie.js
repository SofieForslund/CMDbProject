//gömd ID för användning i fetch
document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent

//variabler
let counter = 0;
let notInCmdbInfo = document.querySelector('#cmdbInfo')
let dislikeNumber = document.querySelector('#dislikeNumber')
let dislikeText = document.querySelector('#dislikeText')
let likeText = document.querySelector('#likeText')
let likeNumber = document.querySelector('#likeNumber')
let likeThumb = document.querySelector('#like')
let dislikeThumb = document.querySelector('#dislike')
let baseUrlLikeDislike = "https://grupp9.dsvkurs.miun.se/api/Movie/"

//startvärden
if (notInCmdbInfo.textContent === "") {
    notInCmdbInfo.style.display = "none"
}
else {
    dislikeNumber.style.display = "none"
    dislikeText.style.display = "none"
    likeNumber.style.display = "none"
    likeText.style.display = "none"
}
//ja, vi tänkte refaktorera så vi slipper upprepa kod. vi hann inte.
//like
likeThumb.addEventListener("click", async function () {
    try {
        if (counter === 0) {
            let response = await fetch(`${baseUrlLikeDislike}${movieID}/like`)
            let movie = await response.json()
            await updatelikeDislikeNumbers(movie)
            counter ++
        }
        else {
            alert("you already rated this movie!")
        }
    } catch (e) {
        alert("it didn't work to like the film! try again");
    }
});

//dislike
dislikeThumb.addEventListener("click", async function () {
    try {
        if (counter === 0) {
            let response = await fetch(`${baseUrlLikeDislike}${movieID}/dislike`)
            let movie = await response.json()
            await updatelikeDislikeNumbers(movie)
            counter ++
        }
        else {
            alert("you already rated this movie!")
        }

    } catch (e) {
        alert("it didn't work to dislike the film! try again");
    }
});

//uppdatera värden
function updatelikeDislikeNumbers(movie) {
    likeNumber.textContent = movie.numberOfLikes
    dislikeNumber.textContent = movie.numberOfDislikes
    dislikeNumber.style.display = "inline"
    likeNumber.style.display = "inline"
    notInCmdbInfo.style.display = "none"
}



            