class UserApi {
    static fetchUsers() {
        fetch("https://use-it-music.herokuapp.com/users")
        .then(resp => resp.json())
        .then(json => { 
            json.forEach(user => {
                User.findOrCreateUser(user)
                User.ratings
            });
    })
    }
    static fetchUser(name) {
        fetch("https://use-it-music.herokuapp.com/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({name})
        })
        .then(resp => resp.json())
        .then(json => { 
            json.data.find(user => {
                User.findOrCreateUser(user)
            });
        })
        .catch(this.handleError)
    }
}
