"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/input-number/style/index.css");
exports.InputNumber = styled_components_1.default(antd_1.InputNumber)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover,\n  &:focus {\n    border-color: ", ";\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &.ant-input-number-focused {\n    box-shadow: none;\n    border-color: ", ";\n  }\n  .ant-input-number-handler-wrap {\n    .ant-input-number-handler:hover .ant-input-number-handler-up-inner,\n    .ant-input-number-handler:hover .ant-input-number-handler-down-inner {\n      color: ", ";\n    }\n  }\n"], ["\n  &:hover,\n  &:focus {\n    border-color: ", ";\n  }\n  &:focus {\n    box-shadow: none;\n  }\n  &.ant-input-number-focused {\n    box-shadow: none;\n    border-color: ", ";\n  }\n  .ant-input-number-handler-wrap {\n    .ant-input-number-handler:hover .ant-input-number-handler-up-inner,\n    .ant-input-number-handler:hover .ant-input-number-handler-down-inner {\n      color: ", ";\n    }\n  }\n"])), function (_a) {
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
//# sourceMappingURL=InputNumber.js.map