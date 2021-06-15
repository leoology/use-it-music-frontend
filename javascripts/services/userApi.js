class UserApi {
    static fetchUsers() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(user => {
                User.findOrCreateUser(user)
            });
    })
    }
}