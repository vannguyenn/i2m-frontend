"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
require("antd/lib/button/style/index.css");
exports.Button = styled_components_1.default(antd_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: none;\n  &.ant-btn {\n    border-radius: 6px;\n  }\n  &.ant-btn:not(.ant-btn-primary) {\n    border: 1px solid ", ";\n    color: ", ";\n    font-weight: 500;\n  }\n\n  &.ant-btn-primary {\n    background: ", ";\n    border-color: ", ";\n    font-weight: 500;\n\n    /* box-shadow: 0px 3px 5px rgba(255, 98, 101, 0.4); */\n  }\n  &&&.ant-btn-danger {\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n    border-radius: 2px;\n    height: 35px;\n\n    &:not(.loading) {\n      &:active {\n        background-color: ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n  ", ";\n  ", ";\n"], ["\n  box-shadow: none;\n  &.ant-btn {\n    border-radius: 6px;\n  }\n  &.ant-btn:not(.ant-btn-primary) {\n    border: 1px solid ", ";\n    color: ", ";\n    font-weight: 500;\n  }\n\n  &.ant-btn-primary {\n    background: ", ";\n    border-color: ", ";\n    font-weight: 500;\n\n    /* box-shadow: 0px 3px 5px rgba(255, 98, 101, 0.4); */\n  }\n  &&&.ant-btn-danger {\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n    border-radius: 2px;\n    height: 35px;\n\n    &:not(.loading) {\n      &:active {\n        background-color: ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n  ", ";\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
}, function (props) { return props.theme.colors.white; }, function (props) { return props.theme.colors.red; }, function (props) { return props.theme.colors.red; }, function (props) { return props.theme.colors.red75; }, function (props) { return props.theme.colors.grey45; }, function (props) { return props.theme.colors.grey5; }, styled_system_1.width, styled_system_1.space);
var templateObject_1;
//# sourceMappingURL=Button.js.map