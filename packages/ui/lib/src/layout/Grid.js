"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
exports.GridItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n\n  ", "\n  ", ";\n"], ["\n  width: 100%;\n\n  ", "\n  ", ";\n"])), styled_system_1.gridArea, styled_system_1.flexbox);
exports.Grid = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  &&& {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"], ["\n  display: grid;\n  &&& {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"])), styled_system_1.space, styled_system_1.grid, styled_system_1.flexbox, styled_system_1.height);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Grid.js.map