document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent
//let thumbs = document.querySelector('.ratingThumbs')

document.querySelector('#like').addEventListener("click", async function (e) {
    try {
        e.preventDefault();
        let response = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}/like`)
        let movie = await response.json()
        await update(movie)

    } catch (e) {
        alert("det gick inte");
    }
});

document.querySelector('#dislike').addEventListener("click", async function (e) {
    try {
        e.preventDefault();
        let response = await fetch(`https://grupp9.dsvkurs.miun.se/api/Movie/${movieID}/dislike`)
        let movie = await response.json()
        await update(movie)

    } catch (e) {
        alert("det gick inte");
    }
});

function update(movie) {
    document.querySelector('#likeNumber').innerHTML = movie.numberOfLikes;
    document.querySelector('#dislikeNumber').innerHTML = movie.numberOfDislikes;
}


