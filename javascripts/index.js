// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("keyup", e=>{
//     const searchString = e.target.value.toLowerCase();
//     const filter = artist.filter(character =>{
//         return(
//             artist.name.toLowerCase().includes(searchString)||
//             artist.song.toLowerCase().includes(searchString)
//         );
//     });
//     displayArtists(filter);
// });

document.addEventListener("DOMContentLoaded", ArtistApi.fetchArtists)

document.getElementById('startButton').addEventListener("click", searchStuff);

function searchStuff(){
    document.getElementById('searchWrapper').style.visibility = "visible";
    document.getElementById('startButton').style.visibility="hidden"
    document.querySelector("#searchWrapper > input[type=text]").addEventListener("keyup", Artist.searchArtists)

    }


    document.getElementById('stars').addEventListener("click", rateStars);
    function rateStars(){
        // document.getElementById("stars").style.marginTop = "1000px";
        document.getElementById('star-widget').style.visibility = "visible";
        document.getElementById('stars').style.visibility="hidden";
        Array.from(document.getElementsByClassName('rate')).forEach(star => {
            star.addEventListener("click", Rating.createRatings)
            
        });
    }
  
    // document.getElementById('submit').addEventListener("submit", Rating.createRatings);
 
    
    
  