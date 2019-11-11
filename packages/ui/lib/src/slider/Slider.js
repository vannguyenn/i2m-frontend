"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
require("antd/lib/slider/style/index.css");
require("antd/lib/tooltip/style/index.css");
var styled_components_1 = require("styled-components");
exports.Slider = styled_components_1.default(antd_1.Slider)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 220px;\n  .ant-slider-handle {\n    border-color: ", ";\n    &:focus {\n      box-shadow: 0 0 0 5px rgba(255, 98, 101, 0.2);\n    }\n  }\n  .ant-slider-track {\n    background-color: ", ";\n  }\n  &:hover {\n    .ant-slider-track {\n      background-color: ", ";\n    }\n    .ant-slider-handle:not(.ant-tooltip-open) {\n      border-color: ", ";\n    }\n  }\n"], ["\n  min-width: 220px;\n  .ant-slider-handle {\n    border-color: ", ";\n    &:focus {\n      box-shadow: 0 0 0 5px rgba(255, 98, 101, 0.2);\n    }\n  }\n  .ant-slider-track {\n    background-color: ", ";\n  }\n  &:hover {\n    .ant-slider-track {\n      background-color: ", ";\n    }\n    .ant-slider-handle:not(.ant-tooltip-open) {\n      border-color: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1;
//# sourceMappingURL=Slider.js.map