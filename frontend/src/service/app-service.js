import http from './http-common'

class AppDataService {
    login(data) {
        return http.post(`/auth/login`, data);
    }

    signup(data) {
        return http.post(`/user`, data);
    }

    signout() {
        return http.post(`/auth/logout`);
    }

    user() {
        return http.get(`/user/current-user`);
    }
}

export default new AppDataService();
