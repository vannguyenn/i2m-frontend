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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var normalizeAccessLevel = function (root) {
    var data = root.data;
    if (!data) {
        return;
    }
    var normalizedData = __assign(__assign({}, data), { key: data._id, value: data._id, title: data.name });
    return __assign(__assign({}, normalizedData), { children: lodash_1.map(root.children, normalizeAccessLevel) });
};
exports.default = normalizeAccessLevel;
//# sourceMappingURL=normalizeAccessLevel.js.map