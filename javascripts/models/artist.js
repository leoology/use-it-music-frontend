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
        const formattedName= name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ")
        return this.all.filter(function(artist){
            return artist.name.startsWith(formattedName)
        })
    }

    static searchArtists(e){
        let searchText = e.target.value
        const artists= Artist.findAllByName(searchText)
        // debugger
        document.getElementById("artists-list").innerHTML=""
        artists.forEach(artist =>{
            let li= document.createElement("li")
            let a= document.createElement("a")
            a.innerText= artist.name
            a.href="#"
           a.addEventListener("click", artist.show.bind(artist))
            li.append(a)
            document.getElementById("artists-list").append(li)
            document.getElementById("artists-list").style.visibility="visible";

            
            
        })
        if (e.target.value===""){
            document.getElementById("artists-list").innerHTML=""
            document.getElementById("stars").style.visibility="hidden";
            document.getElementById("artists-list").style.visibility="hidden";
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
                // <p>Rating: ${rating.findRating(this)} </p>
                document.getElementById("stars").style.visibility="visible";
                
            }

   

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