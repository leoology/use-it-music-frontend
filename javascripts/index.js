const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", e=>{
    const searchString = e.target.value.toLowerCase();
    const filter = artist.filter(character =>{
        return(
            artist.name.toLowerCase().includes(searchString)||
            artist.song.toLowerCase().includes(searchString)
        );
    });
    displayArtists(filter);
});
document.getElementById('startButton').addEventListener("click", searchStuff);

function searchStuff(){
    document.getElementById('searchWrapper').style.visibility = "visible";
    document.getElementById('startButton').style.visibility="hidden"

    }

    document.getElementById('stars').addEventListener("click", rateStars);
    function rateStars(){
        document.getElementById('star').style.visibility = "visible";
        document.getElementById('stars').style.visibility="hidden"


    }

