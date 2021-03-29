import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

export const freeSpaceApi = {
    getMessage() {
        return instance.get('/freeMessages')
            .then(res => res.data);
    }
};

export const workSpaceApi = {
    getMessage() {
        return instance.get('/workingMessages')
            .then(res => res.data);
    }
};

export const profileApi = {
    getProfile(id) {
        return instance.get(`user/${id}`)
            .then(res => res.data);
    }
};
