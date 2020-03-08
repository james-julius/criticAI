import axios from 'axios';
import config from './apiconfig.json';
const User = {
    load: () => {
        let user = localStorage.getItem('user');
        if (user) {
            try {
                return JSON.parse(user);
            } catch (err) {
                console.log('Failing to get user')
                console.log(err);
            }
        }
        return null;
    },
    me: async (jwt) => {
        let response = await axios.get(config.strapiUrl + '/users/me', {
            headers: { Authorization: 'Bearer ' + jwt },
        });

        localStorage.setItem('user', JSON.stringify({ ...response.data, jwt }));
        console.log(response.data);
        return { ...response.data, jwt };
    },
    find: async (id, jwt) => {
        let response = await axios.get(config.strapiUrl + '/users/' + id, {
            headers: { Authorization: 'Bearer ' + jwt },
        });
        return response.data;
    },
    signout: () => {
        localStorage.removeItem('user');
        return User.load();
    },
    forgotPassword: async (email) =>
        axios
            .post(`${config.strapiUrl}/auth/forgot-password`, {
                email: email,
                url: `${config.rootUrl}/resetpassword/`,
            })
            .then(response => {
                // Handle success.
                console.log('User received an email');
                return response;
            }, error => {
                // Handle error.
                console.log('An error occurred:', error);
                return error.response;
            }),
    resetPassword: async (password, code) =>
        axios
            .post(`${config.strapiUrl}/auth/reset-password`, {
                code: code,
                password: password,
                passwordConfirmation: password,
            })
            .then(response => {
                // Handle success.
                console.log('Password successfully reset');
                return response;
            }, error => {
                // Handle error.
                console.log('An error occurred:', error);
                return error;
            }),
    login: async (body) => {
        // body = { identifier: "email / username", password: "password" }
        return axios
            .post(config.strapiUrl + '/auth/local', body)
            .then(async response => User.me(response.data.jwt), (error) => {
                console.log(error);
                // console.log('^^ ERROR ^^')
                return 'failed'}
                )
    },
    register: async (body) => {
        // body = { email: "email", password: "password", ...allOtherOptionalData }
        return axios
            .post(config.strapiUrl + '/auth/local/register/', body)
            .then(async response => User.me(response.data.jwt), error => {
                console.log(error);
                return 'failed';
            })
    },
    update: async (userid, body, jwt) => {
        return axios
            .put(config.strapiUrl + `/users/${userid}`, body, {
                headers: { Authorization: 'Bearer ' + jwt },
            })
            .then(async response => User.me(jwt))
            .catch(error => {
                console.log(error);
                return error;
            });
    },
    delete: async (userid, jwt) => {
        return axios
            .delete(config.strapiUrl + `/users/${userid}`, {
                headers: { Authorization: 'Bearer ' + jwt },
            })
            .then(async response => User.me(response.data.jwt))
            .catch(error => {
                console.log(error);
                return error;
            });
    }
};

export default User;
