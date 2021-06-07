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

    }

    document.getElementById('stars').addEventListener("click", rateStars);
    function rateStars(){
        document.getElementById('star-widget').style.visibility = "visible";
        document.getElementById('stars').style.visibility="hidden";
        document.getElementById('submit').style.visibility="visible";
    }
    document.getElementById('submit').addEventListener("click", submitRating);
    function submitRating(){
        document.getElementById('star-widget').value = Artist.rating
    }
    function avgRating(){
        Artist.ratings.each(function(i){
            let total = 0
            i+total
        })
        let avg= total/Artist.ratings.count;
        return avg
        }
    
  
// document.getElementById('rate-1').addEventListener("click", rateOne);
// function rateOne(){
//     Song.rating=1
// }
// document.getElementById('rate-2').addEventListener("click", rateTwo);
// function rateTwo(){
//     Song.rating=2
// }
// document.getElementById('rate-3').addEventListener("click", rateThree);
// function rateThree(){
//     Song.rating=3
// }
// document.getElementById('rate-4').addEventListener("click", rateFour);
// function rateFour(){
//     Song.rating=4
// }
// document.getElementById('rate-5').addEventListener("click", rateFive);
// function rateFive(){
//     Song.rating=5
// }