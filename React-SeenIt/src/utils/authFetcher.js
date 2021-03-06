const app_id = 'kid_B1lzk4wMm';
const app_secret = '3efb9c501c7a416184076072f23eb1a8';
const baseUrl = 'https://baas.kinvey.com';

let fetcher = {
    login: (stateObj) => {
        return fetch(`${baseUrl}/user/${app_id}/login`, {
            method: 'POST',
            body: JSON.stringify(stateObj),
            headers: {
                Authorization: 'Basic ' + btoa(`${app_id}:${app_secret}`),
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.json();
        })
    },
    register: (stateObj) => {
        return fetch(`${baseUrl}/user/${app_id}`, {
            method: 'POST',
            body: JSON.stringify(stateObj),
            headers: {
                Authorization: 'Basic ' + btoa(`${app_id}:${app_secret}`),
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.json();
        })
    },
    logout: () => {
        return fetch(`${baseUrl}/user/${app_id}/_logout`, {
            method: 'POST',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        })
        // .then(data => {
        //     return data.json();
        // })
    },
    allPosts: () => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts?query={}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    },
    myPosts: (username) => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts?query={"author":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    },
    createPost: (stateObj) => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts`, {
            method: 'POST',
            body: JSON.stringify(stateObj),
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(data => {
            return data.json();
        })
    },
    getEditPost: (id) => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    },
    editPost: (id) => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    },
    getComments: (id) => {
        return fetch(`${baseUrl}/appdata/${app_id}/comments?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    },
    deletePost: (id) => {
        return fetch(`${baseUrl}/appdata/${app_id}/posts/${id} `, {
            method: 'DELETE',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json();
        })
    }
}

export default fetcher;



