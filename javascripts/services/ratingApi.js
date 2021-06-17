class RatingApi {
   static createRatings(e) {
        const userName
        const artistName =e.target.parentElement.parentElement.querySelector("#artists-list .artist h2").innerText
        const findArtist= Artist.findByName(artistName)
        const findUser= User.findByName(userName)
        // debugger
        const scoreMap= {"1":5, "2":4, "3":3,"4":2,"5":1}
        const data = {
            score: scoreMap[e.target.value],
            artist_id: findArtist.id
            user_id: findUser.id
        }
        fetch("http://localhost:3000/ratings", {
            method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => { 
            new Rating(json)
            const artist= Artist.findById(json.artist_id)
            document.querySelector(".avg-rating").innerText=`Rating: ${artist.avgRating()}`
            document.getElementById('star-widget').style.visibility = "hidden";

        })
    }
}