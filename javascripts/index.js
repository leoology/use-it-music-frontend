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
    function turnStarsYellow(){
        if (document.getElementById('s5').style.backgroundColor=="yellow"){
        document.getElementById('s4').style.backgroundColor= "yellow" 
            if (document.getElementById('s4').style.backgroundColor= "yellow"){
            document.getElementById('s3').style.backgroundColor= "yellow" 
                if (document.getElementById('s3').style.backgroundColor=="yellow"){
                    document.getElementById('s2').style.backgroundColor= "yellow" 
                    if (document.getElementById('s2').style.backgroundColor= "yellow"){
                            document.getElementById('s1').style.backgroundColor= "yellow" 
                    }
                }
            }
        }
    }
document.getElementById('s1').addEventListener("click", rateOne);
function rateOne(){
    Song.rating=1
}
document.getElementById('s2').addEventListener("click", rateTwo);
function rateTwo(){
    Song.rating=2
}
document.getElementById('s3').addEventListener("click", rateThree);
function rateThree(){
    Song.rating=3
}
document.getElementById('s4').addEventListener("click", rateFour);
function rateFour(){
    Song.rating=4
}
document.getElementById('s5').addEventListener("click", rateFive);
function rateFive(){
    Song.rating=5
}