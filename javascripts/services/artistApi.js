class ArtistApi {
    static fetchArtists() {
        fetch("https://use-it-music.herokuapp.com/artists")
        .then(resp => resp.json())
        .then(json => { 
            json.data.forEach(artist => {
                Artist.findOrCreateArtist(artist.attributes)
               artist.attributes.ratings.forEach(rating=> new Rating(rating))
            });
            
            
            
            //iterate through json array *once we have json serilaizer*
            //using .forEach, inside the block create new object out of Artist class
        })
    }
}