
document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent


let counter = 0;
let notInCmdbInfo = document.querySelector('#cmdbInfo')
let dislikeNumber = document.querySelector('#dislikeNumber')
let dislikeText = document.querySelector('#dislikeText')
let likeText = document.querySelector('#likeText')
let likeNumber = document.querySelector('#likeNumber')
let likeThumb = document.querySelector('#like')
let dislikeThumb = document.querySelector('#dislike')
let baseUrlLikeDislike = "https://grupp9.dsvkurs.miun.se/api/Movie/"
let alreadyRatedString = "you already rated this movie!"
let errorString = "it didn't work to rate the film! try again!"
let isLikeOrDislike


if (notInCmdbInfo.textContent === "") {
    notInCmdbInfo.style.display = "none"
}
else {
    dislikeNumber.style.display = "none"
    dislikeText.style.display = "none"
    likeNumber.style.display = "none"
    likeText.style.display = "none"
}


async function likeOrDislike(isLikeOrDislike) {
    try {
        if (counter === 0) {
            if (isLikeOrDislike === "like") {
                response = await fetch(`${baseUrlLikeDislike}${movieID}/like`)
            }
            else {
                response = await fetch(`${baseUrlLikeDislike}${movieID}/dislike`)
            }
            let movie = await response.json()
            updatelikeDislikeNumbers(movie)
            counter++
        }
        else {
            alert(alreadyRatedString)
        }
    } catch (e) {
        alert(errorString);
    }
}


likeThumb.addEventListener("click", async function (e) {
    isLikeOrDislike = "like"
    likeOrDislike(isLikeOrDislike)

});


dislikeThumb.addEventListener("click", async function (e) {
    isLikeOrDislike = "dislike"
    likeOrDislike(isLikeOrDislike)
});


function updatelikeDislikeNumbers(movie) {
    likeNumber.textContent = movie.numberOfLikes
    dislikeNumber.textContent = movie.numberOfDislikes
    dislikeNumber.style.display = "inline"
    likeNumber.style.display = "inline"
    notInCmdbInfo.style.display = "none"
}



            