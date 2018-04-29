export let fetchCategories = (token) => 
    fetch('https://etsetera.herokuapp.com/category', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token }
    })
    .then(resp => resp.json())

export let fetchSignIn = (userObject) => 
    fetch('https://etsetera.herokuapp.com/auth/local', { 
        method: 'POST',
        body: JSON.stringify(userObject),
        headers: { "content-type": 'application/json' }
     })
    .then(resp => resp.json());