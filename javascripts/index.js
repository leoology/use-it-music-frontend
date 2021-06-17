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
document.addEventListener("DOMContentLoaded", UserApi.fetchUsers)

document.getElementById('startButton').addEventListener("click", user);

function user(){
    document.getElementById('startButton').style.visibility="hidden"
    document.getElementById('username').style.visibility="visible"
    document.querySelector("#submit-user").addEventListener("click", User.searchUsers)


}

function searchStuff(){
    document.getElementById('searchWrapper').style.visibility = "visible";
    document.getElementById('username').style.visibility="hidden"
    document.querySelector("#searchWrapper > input[type=text]").addEventListener("keyup", Artist.searchArtists)

    }


    document.getElementById('stars').addEventListener("click", rateStars);
    function rateStars(){
        // document.getElementById("stars").style.marginTop = "1000px";
        document.getElementById('star-widget').style.visibility = "visible";
        document.getElementById('stars').style.visibility="hidden";
        Array.from(document.getElementsByClassName('rate')).forEach(star => {
            star.addEventListener("click", RatingApi.createRatings)
            
        });
    }
  
    // document.getElementById('submit').addEventListener("submit", Rating.createRatings);
 
    
    
  