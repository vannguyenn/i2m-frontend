"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextCookie = require("next-cookies");
var constants_1 = require("@frontend/constants");
var redirect_1 = require("./redirect");
exports.getToken = function (ctx) {
    var _a = constants_1.KEYS.ACCESS_TOKEN, token = nextCookie(ctx)[_a];
    return token;
};
exports.auth = function (ctx, url) {
    if (url === void 0) { url = constants_1.PATHS.login; }
    var token = exports.getToken(ctx);
    if (!token) {
        var pathname = ctx.pathname || '';
        if (!pathname.startsWith(url)) {
            redirect_1.redirect(ctx, url);
        }
    }
};
//# sourceMappingURL=auth.js.map