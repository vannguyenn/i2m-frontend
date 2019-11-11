"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
require("antd/lib/table/style/index.css");
require("antd/lib/pagination/style/index.css");
exports.Table = styled_components_1.default(antd_1.Table)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {\n    background-color: #ffefef;\n  }\n"], ["\n  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {\n    background-color: #ffefef;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Table.js.map