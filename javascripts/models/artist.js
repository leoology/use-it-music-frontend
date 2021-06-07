class Artist{
    static all=[]

    function Artist(name, genres, image_url, popularity, rating){
        this.name = name
        this.genres = genres
        this.image_url = image_url
        this.popularity = popularity
        this.rating=rating
    }
    static findArtist(){
        return this.find(function(artist){
            artist.name===name
        })
    }

    let displayArtist = (artists) =>{
        const htmlString= artists.map((artist)=>{
            return
            <li class="artist">
                <h2>${artist.name}</h2>
                <p>Genre(s): ${artist.genres}</p>
                <img src="${artist.img_url}"></img>
                <p>Popularity: ${artist.popularity}</p>
                <p> Average Rating: ${avgRating} </p>
            </li>
        }).join('');
        artistList.inner.html=htmlString
    }
}