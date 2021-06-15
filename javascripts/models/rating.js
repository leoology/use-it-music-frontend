//go through all rating sin rating class and filter by artist, create constant out of filter and calculate average
class Rating{
    static all=[]

    constructor({id, score, artist_id}){
        this.id = id
        this.score = score
        this.artistId = artist_id
        Rating.all.push(this)
    }
    static findRatingByArtistId(artistId){
       return this.all.filter(currentRating => currentRating.artistId === artistId)
    }
    
    
    static fetchRatings() {
        fetch("http://localhost:3000/ratings")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(rating => {

                findOrCreateRating()
            });
        })
    }

    static findOrCreateRating(rating){
        this.findById(rating.id)|| new Rating(rating)
    }
    static findById(id){
        return this.all.find(function(id){
            rating.id=== id
        })
    }
     submitRating(){
        artist.rating= document.getElementById('star-widget').value
    }

    static createRatings(e) {
        const artistName =e.target.parentElement.parentElement.querySelector("#artists-list .artist h2").innerText
        const findArtist= Artist.findByName(artistName)
        // debugger
        const scoreMap= {"1":5, "2":4, "3":3,"4":2,"5":1}
        const data = {
            score: scoreMap[e.target.value],
            artist_id: findArtist.id
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