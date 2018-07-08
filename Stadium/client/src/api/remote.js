const host = 'http://localhost:8080/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function createStadium(stadium) {
    const res = await fetch(host + 'stadium/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stadium)
    });
    return await res.json();
}

async function getPage(page) {
    const res = await fetch(host + 'stadium/all?page=' + page);
    return await res.json();
}

async function getDetails(id) {
    const res = await fetch(host + 'stadium/details/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
    return await res.json();
}

export { register, login, createStadium, getPage, getDetails };