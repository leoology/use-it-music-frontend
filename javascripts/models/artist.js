class Artist{
    static all=[]

    constructor({name, genres, image_url, popularity, rating}){
        this.name = name
        this.genres = genres
        this.image_url = image_url
        this.popularity = popularity
        this.rating=rating
        Artist.all.push(this)
    }
    static findOrCreateArtist(artist){
        this.findByName(artist.name)|| new Artist(artist)
    }
    static findByName(name){
        return this.all.find(function(artist){
            artist.name===name
        })
    }
    static findAllByName(name){
        return this.all.filter(function(artist){
            return artist.name.startsWith(name)
        })
    }

    static searchArtists(e){
        let searchText = e.target.value
        // debugger
        const artists= Artist.findAllByName(searchText)
        artists.forEach(artist =>{
            let li= document.createElement("li")
            let a= document.createElement("a")
            a.innerText= artist.name
            a.href="#"
           a.addEventListener("click", artist.show.bind(artist))
            li.append(a)
            document.getElementById("artists-list").append(li)
            
            
        })
        if (searchText.innerText===""){
            document.getElementById("artists-list").innerHTML=""
        }

    }
    
  
     show(e){
        document.getElementById("artists-list").innerHTML= `
            <li class="artist">
                <h2>${this.name}</h2>
                <p>Genre(s): ${this.genres}</p>
                <p>Popularity: ${this.popularity}</p>
                </li>
                `
                // <p> Average Rating: ${avgRating} </p>
    }

    // function avgRating(){
    //     Artist.ratings.each(function(i){
    //         let total = 0
    //         i+total
    //     })
    //     let avg= total/Artist.ratings.count;
    //     return avg
    //     }

    // static displayArtist = (artists) =>{
    //     const htmlString= artists.map((artist)=>{
    //         return `
    //         <li class="artist">
    //             <h2>${artist.name}</h2>
    //             <p>Genre(s): ${artist.genres}</p>
    //             <img src="${artist.img_url}"></img>
    //             <p>Popularity: ${artist.popularity}</p>
    //             <p> Average Rating: ${avgRating} </p>
    //         </li>`
    //     }).join('');
    //     artistList.inner.html=htmlString
    // }
}