class UserApi {
    static fetchUsers() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(user => {
                User.findOrCreateUser(user)
                User.ratings
            });
    })
    }
    static fetchUser(name) {
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({name})
        })
        .then(resp => resp.text())
        .then(json => { 
            // debugger
        })
        .catch(this.handleError)
    }
}
