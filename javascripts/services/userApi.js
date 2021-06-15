class UserApi {
    static fetchUsers() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => { 
            json.data.forEach(user => {
                User.findOrCreateUser(user)
            });
            
            
            
            //iterate through json array *once we have json serilaizer*
            //using .forEach, inside the block create new object out of Artist class
        })
    }
}