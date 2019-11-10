"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var layout_1 = require("../layout");
var router_1 = require("next/router");
var Header = styled_components_1.default(layout_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 150px;\n  background-color: ", ";\n"], ["\n  height: 150px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary100;
});
exports.MasterLayout = function (_a) {
    var RightAction = _a.rightAction, SearchContainer = _a.searchComponent, children = _a.children;
    return (React.createElement(layout_1.Flex, { flexDirection: "column", justifyContent: "flex-start", style: { minHeight: '100%' } },
        React.createElement(Header, { flexDirection: "column", justifyContent: "flex-start" },
            React.createElement(layout_1.Flex, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", p: "20px 50px" },
                React.createElement("img", { src: "/static/image/small-logo.png", onClick: function () { return router_1.default.push('/'); }, style: { cursor: 'pointer' } }),
                React.createElement(RightAction, null)),
            React.createElement(SearchContainer, null)),
        children));
};
var templateObject_1;
//# sourceMappingURL=MasterLayout.js.map