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
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
require("antd/lib/popover/style/index.css");
var BasePopover = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React.createElement(antd_1.Popover, __assign({}, rest, { overlayClassName: className })));
};
exports.Popover = styled_components_1.default(BasePopover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.ant-popover {\n    .ant-popover-content {\n      .ant-popover-inner .ant-popover-inner-content {\n        min-width: 100px;\n        padding: 5px;\n\n        a {\n          color: #000;\n          display: block;\n          border-radius: 2px;\n          padding: 5px 10px;\n          &:hover {\n            background: ", ";\n          }\n        }\n      }\n    }\n  }\n"], ["\n  &.ant-popover {\n    .ant-popover-content {\n      .ant-popover-inner .ant-popover-inner-content {\n        min-width: 100px;\n        padding: 5px;\n\n        a {\n          color: #000;\n          display: block;\n          border-radius: 2px;\n          padding: 5px 10px;\n          &:hover {\n            background: ", ";\n          }\n        }\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey15;
});
var templateObject_1;
//# sourceMappingURL=Popover.js.map