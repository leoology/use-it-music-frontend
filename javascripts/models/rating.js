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
        
}