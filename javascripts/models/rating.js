//go through all rating sin rating class and filter by artist, create constant out of filter and calculate average
class Rating{
    static all=[]

    constructor({id, score, artist_id}){
        this.id = id
        this.score = score
        this.artist_id = artist_id
        Rating.all.push(this)
    }
    findRating(){
        Rating.all.filter(currentRating => currentRating.artist_id === this.id)
    }
    

    avgRating(){

        let total = 0
        this.findRating().forEach(function(i){
            i+total
        })
        let avg= total/this.ratings.count;
        return avg
        }
    
    static fetchRatings() {
        fetch("http://localhost:3000/ratings")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(rating => {
                debugger
                findOrCreateRating()
            });
        })
    }

    static findOrCreateRating(rating){
        this.findById(rating.id)|| new Rating(rating){
        }
    }
    static findById(id){
        return this.all.find(function(id){
            rating.id=== id
        })
    }
    function submitRating(){
        artist.rating= document.getElementById('star-widget').value
    }

    static createRatings() {
        fetch("http://localhost:3000/ratings", {
            method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(rating => {
                debugger
                findOrCreateRating()
            });
        })
    }
        
}