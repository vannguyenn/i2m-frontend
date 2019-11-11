"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/input/style/index.css");
exports.Input = styled_components_1.default(antd_1.Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n    border-right-width: 1.5px !important;\n    box-shadow: none;\n  }\n\n  &.ant-input,\n  .ant-input {\n    height: 40px;\n    border-width: 1.5px;\n  }\n\n  &:hover,\n  &:focus {\n    border-width: 1.5px !important;\n    box-shadow: none;\n  }\n"], ["\n  &.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n    border-right-width: 1.5px !important;\n    box-shadow: none;\n  }\n\n  &.ant-input,\n  .ant-input {\n    height: 40px;\n    border-width: 1.5px;\n  }\n\n  &:hover,\n  &:focus {\n    border-width: 1.5px !important;\n    box-shadow: none;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Input.js.map