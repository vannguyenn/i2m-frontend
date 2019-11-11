"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRawObject = function (obj) {
    if (obj === void 0) { obj = null; }
    return JSON.parse(JSON.stringify(obj));
};
//# sourceMappingURL=toRawObject.js.map