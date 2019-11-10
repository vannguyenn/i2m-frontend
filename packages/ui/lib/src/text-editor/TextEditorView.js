"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("react-quill/dist/quill.snow.css");
var layout_1 = require("../layout");
var styled_components_1 = require("styled-components");
var View = styled_components_1.default(layout_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  font-size: 13px;\n  word-break: break-word;\n\n  & > * {\n    cursor: inherit;\n  }\n\n  ol,\n  ul {\n    padding-inline-start: 0;\n  }\n  a {\n    color: ", ";\n  }\n"], ["\n  padding: 0;\n  font-size: 13px;\n  word-break: break-word;\n\n  & > * {\n    cursor: inherit;\n  }\n\n  ol,\n  ul {\n    padding-inline-start: 0;\n  }\n  a {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.medium;
});
exports.TextEditorView = function (_a) {
    var description = _a.description, props = __rest(_a, ["description"]);
    return (React.createElement(View, __assign({ className: "ql-editor", dangerouslySetInnerHTML: { __html: description } }, props)));
};
var templateObject_1;
//# sourceMappingURL=TextEditorView.js.map