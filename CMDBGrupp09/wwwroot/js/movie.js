document.querySelector('#ID').style.display = "none"
let movieID = document.querySelector('#ID').textContent


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
    document.querySelector('#likeNumber').textContent = movie.numberOfLikes
    document.querySelector('#dislikeNumber').textContent = movie.numberOfDislikes
    document.querySelector('#dislikeNumber').style.display = "inline"
    document.querySelector('#likeNumber').style.display = "inline"
    document.querySelector('#cmdbInfo').style.display = "none"
}

let string = document.querySelector('#cmdbInfo')

if (string.textContent === "") {
    document.querySelector('#cmdbInfo').style.display = "none"
}
else {
    document.querySelector('#dislikeNumber').style.display = "none"
    document.querySelector('#likeNumber').style.display = "none"
}

            