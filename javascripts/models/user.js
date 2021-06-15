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
        let searchText = e.target.value
        const users= User.findAllByName(searchText)
        // debugger
        document.getElementById("users-list").innerHTML=""
        users.forEach(user =>{
            let li= document.createElement("li")
            let a= document.createElement("a")
            a.innerText= user.name
            a.href="#"
           a.addEventListener("click", user.show.bind(user))
           document.getElementById("submit-user").addEventListener("click", handleSubmit.bind(user))
            li.append(a)
            document.getElementById("users-list").append(li)
            document.getElementById("users-list").style.visibility="visible";

            
            
        })
        if (e.target.value===""){
            document.getElementById("users-list").innerHTML=""
            document.getElementById("users-list").style.visibility="hidden";
        }

    }

    static findAllByName(name){
        const formattedName= name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ")
        return this.all.filter(function(user){
            return user.name.startsWith(formattedName)
        })
    }
    static handleSubmit(user){
        new User(user)
        document.getElementById("users-list").innerText=""
    }

}