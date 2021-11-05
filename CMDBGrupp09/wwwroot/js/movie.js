//gömd ID för användning i fetch
document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent

//variabler
let counter = 0;
let cmdbInfo = document.querySelector('#cmdbInfo')
let dislikeNumber = document.querySelector('#dislikeNumber')
let likeNumber = document.querySelector('#likeNumber')
let likeThumb = document.querySelector('#like')
let dislikeThumb = document.querySelector('#dislike')

//startvärden
if (cmdbInfo.textContent === "") {
    cmdbInfo.style.display = "none"
}
else {
    dislikeNumber.style.display = "none"
    likeNumber.style.display = "none"
}
//ja, vi tänkte refaktorera så vi slipper upprepa kod. vi hann inte.
//like
likeThumb.addEventListener("click", async function (e) {
    try {
        if (counter === 0) {
            let response = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}/like`)
            let movie = await response.json()
            await update(movie)
            counter ++
        }
    } catch (e) {
        alert("it didn't work to like the film! try again");
    }
});

//dislike
dislikeThumb.addEventListener("click", async function (e) {
    try {
        if (counter === 0) {
            let response = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}/dislike`)
            let movie = await response.json()
            await update(movie)
            counter ++
        }

    } catch (e) {
        alert("it didn't work to dislike the film! try again");
    }
});

//uppdatera värden
function update(movie) {
    likeNumber.textContent = movie.numberOfLikes
    dislikeNumber.textContent = movie.numberOfDislikes
    dislikeNumber.style.display = "inline"
    likeNumber.style.display = "inline"
    cmdbInfo.style.display = "none"
}



            