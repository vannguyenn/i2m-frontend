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
var mobx_1 = require("mobx");
var NotificationStore = /** @class */ (function () {
    function NotificationStore(notification) {
        this.messages = [];
        this.notification = notification;
        this.notification.config({
            placement: 'bottomRight',
        });
    }
    NotificationStore.prototype.open = function (message) {
        this.push(message);
        return this.notification.open(message);
    };
    NotificationStore.prototype.success = function (message) {
        return this.open(__assign({ type: 'success' }, message));
    };
    NotificationStore.prototype.error = function (message) {
        return this.open(__assign({ type: 'error' }, message));
    };
    NotificationStore.prototype.warn = function (message) {
        return this.open(__assign({ type: 'warning' }, message));
    };
    NotificationStore.prototype.info = function (message) {
        return this.open(__assign({ type: 'info' }, message));
    };
    NotificationStore.prototype.push = function (message) {
        this.messages.push(message);
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Array)
    ], NotificationStore.prototype, "messages", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], NotificationStore.prototype, "notification", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NotificationStore.prototype, "open", null);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NotificationStore.prototype, "push", null);
    return NotificationStore;
}());
exports.NotificationStore = NotificationStore;
//# sourceMappingURL=NotificationStore.js.map