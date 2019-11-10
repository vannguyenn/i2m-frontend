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
var React = require("react");
require("antd/lib/tag/style/index.css");
var antd_1 = require("antd");
exports.Tag = function (props) {
    return React.createElement(antd_1.Tag, __assign({}, props));
};
//# sourceMappingURL=Tag.js.map