//go through all rating sin rating class and filter by artist, create constant out of filter and calculate average
class Rating{
    static all=[]
    let findArtistRating=  findRating(a){
        Rating.all.filter(artist => artist.name === a)
    }
    
    static artistRating(){ 
        findArtistRating.avgRating()
    }

    avgRating(){
        // onclick  on rating stars invoke function that 
        //create rating in back and front end and invoke function that will update rating(avgrating) on page
        //go through all rating sin rating class and filter by artist, create constant out of filter and calculate average
        this.ratings.forEach(function(i){
            
            let total = 0
            i+total
        })
        let avg= total/this.ratings.count;
        return avg
        }
}