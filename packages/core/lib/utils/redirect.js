"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
exports.redirect = function (ctx, url) {
    if (ctx && ctx.req) {
        ctx.res.writeHead(302, { Location: url, previousUrl: ctx.pathname });
        ctx.res.end();
    }
    else {
        router_1.default.push(url);
    }
};
//# sourceMappingURL=redirect.js.map