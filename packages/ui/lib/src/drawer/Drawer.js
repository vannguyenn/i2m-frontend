"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
require("antd/lib/drawer/style/index.css");
var styled_components_1 = require("styled-components");
var BaseDrawer = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(antd_1.Drawer, __assign({ className: className }, props));
};
exports.Drawer = styled_components_1.default(BaseDrawer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-drawer-body {\n    padding: 0;\n  }\n"], ["\n  .ant-drawer-body {\n    padding: 0;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Drawer.js.map