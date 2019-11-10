"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
var styles_1 = require("../styles");
require("antd/lib/spin/style/index.css");
var Indicator = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &&& {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .dot {\n    font-size: 3px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: ", " 1.3s infinite linear;\n  }\n"], ["\n  &&& {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .dot {\n    font-size: 3px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: ", " 1.3s infinite linear;\n  }\n"])), styles_1.keyframes.moveAround);
exports.Spin = styled_components_1.default(antd_1.Spin)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  && {\n    color: ", ";\n  }\n"], ["\n  && {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.Spin.defaultProps = {
    indicator: (React.createElement(Indicator, null,
        React.createElement("div", { className: "dot" }))),
    delay: 100,
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Spin.js.map