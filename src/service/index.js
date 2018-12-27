import Vue from 'vue';

class Api {
    constructor() {
        this.url = ''; //'https://524b0f74-e21b-4e93-b96c-83b29568e15e.mock.pstmn.io';
        this.version = '/v1'
    }
    get(path, options) {
        Vue.axios.get(this.url + path, options)
    }
    login = (options = {}) => Vue.axios.post(this.version + '/admin/login', options).then(res => res.data);
}

export default new Api;