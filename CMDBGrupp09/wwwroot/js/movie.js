document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent
let counter = 0;

let string = document.querySelector('#cmdbInfo')

if (string.textContent === "") {
    document.querySelector('#cmdbInfo').style.display = "none"
}
else {
    document.querySelector('#dislikeNumber').style.display = "none"
    document.querySelector('#likeNumber').style.display = "none"
}

let likeThumb = document.querySelector('#like')
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

let dislikeThumb = document.querySelector('#dislike')
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

function update(movie) {
    document.querySelector('#likeNumber').textContent = movie.numberOfLikes
    document.querySelector('#dislikeNumber').textContent = movie.numberOfDislikes
    document.querySelector('#dislikeNumber').style.display = "inline"
    document.querySelector('#likeNumber').style.display = "inline"
    document.querySelector('#cmdbInfo').style.display = "none"
}



            