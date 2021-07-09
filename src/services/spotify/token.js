import clienteAxios from '../../config/axios'
import qs from 'qs';

let config = {
    client_id: process.env.CLIENT_ID_SPOTIFY,
    client_secret: process.env.CLIENT_SECRET_SPOTIFY,
    redirect_uri: process.env.REDIRECT_URI

}

export const Token = {
    get: () => {

        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: config.client_id,
                password: config.client_secret,
            },
        };
        const data = {
            grant_type: 'authorization_code',
        };

        clienteAxios.post('https://accounts.spotify.com/api/token', qs.stringify(data),
            headers)
            .then(data => {
                localStorage.setItem('access_token', data.data.access_token)
            });
    },
    getUrlCode: () => {
        console.log(typeof (config.redirect_uri))
        return `https://accounts.spotify.com/authorize?client_id=${config.client_id}&response_type=code&redirect_uri=${encodeURIComponent(config.redirect_uri)}&scope=user-read-private%20user-read-email`;
    },

    getAccessToken: (code) => {
        const options = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: config.redirect_uri,
                client_secret: config.client_secret,
                client_id: config.client_id
            }
        }
        let url = `${options.url}?grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(config.redirect_uri)}&client_id=${config.client_id}&client_secret=${config.client_secret}`
        clienteAxios.post(url, options.headers)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
}