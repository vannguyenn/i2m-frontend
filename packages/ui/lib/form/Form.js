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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/form/style/index.css");
var CustomAntForm = styled_components_1.default(antd_1.Form)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  &.ant-form-vertical .ant-form-item,\n  &.ant-form-horizontal .ant-form-item {\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n"], ["\n  width: 100%;\n  &.ant-form-vertical .ant-form-item,\n  &.ant-form-horizontal .ant-form-item {\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n"])));
var CustomFormItem = styled_components_1.default(antd_1.Form.Item)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & {\n    .ant-form-item-label > label {\n      color: ", ";\n\n      &.ant-form-item-required::before {\n        display: none;\n      }\n      &.ant-form-item-required::after {\n        display: none;\n        color: ", ";\n        content: '*';\n        display: inline-block;\n        margin-left: 4px;\n        font-size: 14px;\n        font-family: SimSun, sans-serif;\n        line-height: 1;\n      }\n    }\n\n    .ant-form-item-control-wrapper\n      .ant-form-item-control\n      .ant-form-item-children {\n      input:hover,\n      input:focus {\n        border-color: ", ";\n      }\n      input::placeholder {\n        color: ", ";\n      }\n\n      .ant-input-affix-wrapper:hover input {\n        border-color: ", ";\n      }\n    }\n  }\n"], ["\n  & {\n    .ant-form-item-label > label {\n      color: ", ";\n\n      &.ant-form-item-required::before {\n        display: none;\n      }\n      &.ant-form-item-required::after {\n        display: none;\n        color: ", ";\n        content: '*';\n        display: inline-block;\n        margin-left: 4px;\n        font-size: 14px;\n        font-family: SimSun, sans-serif;\n        line-height: 1;\n      }\n    }\n\n    .ant-form-item-control-wrapper\n      .ant-form-item-control\n      .ant-form-item-children {\n      input:hover,\n      input:focus {\n        border-color: ", ";\n      }\n      input::placeholder {\n        color: ", ";\n      }\n\n      .ant-input-affix-wrapper:hover input {\n        border-color: ", ";\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark30;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
});
exports.Form = function (props) { return (React.createElement(CustomAntForm, __assign({}, props))); };
exports.FormItem = function (props) { return (React.createElement(CustomFormItem, __assign({}, props))); };
var templateObject_1, templateObject_2;
//# sourceMappingURL=Form.js.map