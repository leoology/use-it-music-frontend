class ArtistApi {
    static fetchArtists() {
        fetch("http://localhost:3000/artists")
        // fetch("https://api.spotify.com/v1/albums/' + albumId")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(artist => {
                // debugger
                Artist.findOrCreateArtist(artist)
            });
            
            
            
            //iterate through json array *once we have json serilaizer*
            //using .forEach, inside the block create new object out of Artist class
        })
        .catch(err => console.log(err))
    }
}