"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/checkbox/style/index.css");
exports.Checkbox = styled_components_1.default(antd_1.Checkbox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    .ant-checkbox:hover .ant-checkbox-inner {\n      border-color: ", ";\n    }\n    .ant-checkbox-checked .ant-checkbox-inner {\n      border-color: ", ";\n      background-color: ", ";\n    }\n\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ", ";\n    }\n  }\n  &.ant-checkbox-wrapper:hover .ant-checkbox-inner {\n    border-color: ", ";\n  }\n"], ["\n  & {\n    .ant-checkbox:hover .ant-checkbox-inner {\n      border-color: ", ";\n    }\n    .ant-checkbox-checked .ant-checkbox-inner {\n      border-color: ", ";\n      background-color: ", ";\n    }\n\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ", ";\n    }\n  }\n  &.ant-checkbox-wrapper:hover .ant-checkbox-inner {\n    border-color: ", ";\n  }\n"])), function (_a) {
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
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
});
var templateObject_1;
//# sourceMappingURL=Checkbox.js.map