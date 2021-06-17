class User{
    static all=[]

    constructor({name}){
      this.name = name
        User.all.push(this)
    }
    static findOrCreateUser(user){
        this.findByName(user.name)|| new User(user)
    }
    static findByName(name){
        return this.all.find(function(user){
            return user.name===name
        })
    }

    static searchUsers(e){
        let searchText = e.target.previousElementSibling.value
        const user= User.findByName(searchText)
        if(!!user){
            // debugger
           const h2= document.getElementById("welcome-users")
           h2.innerText=`Welcome ${user.name}`
            h2.style.visibility= "visible"
            document.getElementById('username').style.visibility = "hidden";
            document.getElementById('searchWrapper').style.visibility = "visible";
            document.getElementById('username').style.visibility="hidden"
            document.querySelector("#searchWrapper > input[type=text]").addEventListener("keyup", Artist.searchArtists)
        } else{
            UserApi.fetchUser(searchText)
        }

    }

    static findAllByName(name){
        const formattedName= name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ")
        return this.all.filter(function(user){
            return user.name.startsWith(formattedName)
        })
    }
    static handleSubmit(){
        this.findOrCreateUser()
        document.getElementById("users-list").innerText=""
        document.getElementById('username').style.visibility="hidden"
        searchStuff();

    }


}