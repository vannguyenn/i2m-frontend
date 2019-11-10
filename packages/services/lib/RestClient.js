"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var constants_1 = require("@frontend/constants");
var cookies = require("js-cookie");
var DEFAULT_AXIOS_CONFIG = {
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    },
};
var RestClient = /** @class */ (function () {
    function RestClient() {
        this.instance = axios_1.default.create(DEFAULT_AXIOS_CONFIG);
        this.instance.interceptors.request.use(function (config) {
            var accessToken = cookies.get(constants_1.KEYS.ACCESS_TOKEN);
            if (accessToken) {
                config.headers.Authorization = "Bearer " + accessToken;
            }
            return config;
        });
    }
    RestClient.prototype.request = function (config) {
        return this.instance.request(config);
    };
    return RestClient;
}());
exports.RestClient = RestClient;
//# sourceMappingURL=RestClient.js.map