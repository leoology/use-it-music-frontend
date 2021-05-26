document.getElementsByClassName('searchWrapper').style.visibility = "hidden";
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

function searchBar(){
    document.getElementsByClassName('searchWrapper').style.visibility = "visible";

    }
