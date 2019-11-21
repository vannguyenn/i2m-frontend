"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var ui_1 = require("@frontend/ui");
var link_1 = require("next/link");
var Header = styled_components_1.default(ui_1.Layout.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 50px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 50px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
exports.SecondaryLayout = function (_a) {
    var children = _a.children, ActionButton = _a.actionButton;
    return (React.createElement(ui_1.Layout.Flex, { flexDirection: "column", justifyContent: "flex-start", style: { minHeight: '100%' } },
        React.createElement(Header, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", p: "20px 50px" },
            React.createElement(link_1.default, { href: "/" },
                React.createElement("img", { src: "/static/image/small-logo.png", style: { cursor: 'pointer' } })),
            React.createElement(ActionButton, null)),
        children));
};
var templateObject_1;
//# sourceMappingURL=SecondaryLayout.js.map