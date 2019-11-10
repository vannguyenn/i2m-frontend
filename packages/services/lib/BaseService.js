"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@frontend/constants");
var ioc_1 = require("@frontend/ioc");
var RestClient_1 = require("./RestClient");
var BaseService = /** @class */ (function () {
    function BaseService(restClient) {
        this.restClient = restClient;
    }
    BaseService.prototype.request = function (url, config) {
        var finalUrl = "" + this.name + url;
        return this.restClient.request(__assign(__assign({}, config), { url: finalUrl }));
    };
    BaseService.prototype.get = function (url, config) {
        return this.request(url, config);
    };
    BaseService.prototype.put = function (url, data, config) {
        return this.request(url, __assign(__assign({}, config), { data: data, method: 'PUT' }));
    };
    BaseService.prototype.post = function (url, data, config) {
        return this.request(url, __assign(__assign({}, config), { data: data, method: 'POST' }));
    };
    BaseService.prototype.delete = function (url, data, config) {
        return this.request(url, __assign(__assign({}, config), { data: data, method: 'DELETE' }));
    };
    BaseService = __decorate([
        ioc_1.Service(constants_1.SERVICES.BaseService),
        __metadata("design:paramtypes", [RestClient_1.RestClient])
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map