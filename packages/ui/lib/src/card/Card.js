"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
require("antd/lib/card/style/index.css");
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
exports.Card = styled_components_1.default(antd_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n  .ant-card-cover {\n    img {\n      max-width: 100%;\n      max-height: 330px;\n      height: 330px;\n    }\n  }\n\n  .ant-card-actions {\n    background: transparent;\n    & > li > span:hover {\n      color: ", ";\n    }\n  }\n  ", ";\n  ", ";\n"], ["\n  -webkit-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  box-shadow: 11px 16px 32px -6px rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n  .ant-card-cover {\n    img {\n      max-width: 100%;\n      max-height: 330px;\n      height: 330px;\n    }\n  }\n\n  .ant-card-actions {\n    background: transparent;\n    & > li > span:hover {\n      color: ", ";\n    }\n  }\n  ", ";\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, styled_system_1.width, styled_system_1.space);
var templateObject_1;
//# sourceMappingURL=Card.js.map