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
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var defaultModules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{
                'color': ['#FF0000', '#001F3F', '#0074D9', '#7FDBFF',
                    '#39CCCC', '#3D9970', '#2ECC40', '#01FF70',
                    '#FFDC00', '#FF851B', '#FF4136', '#85144B',
                    '#F012BE', '#B10DC9', '#111111', '#AAAAAA'
                ]
            }],
        ['bold', 'italic', 'underline'],
        [{ list: 'bullet' }, { list: 'ordered' }, { align: 'right' }],
        ['link'], ['clean'],
    ],
};
var QuillEditor = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ql-toolbar.ql-snow {\n    display: flex;\n    align-items: center;\n   // border: 1px solid ", ";\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    color: ", ";\n    padding: 0;\n    padding-left: 5px;\n    height: 33px;\n    .ql-formats {\n      display: flex;\n      align-items: center;\n      padding-right: 5px;\n      margin-right: 5px;\n      height: 16px;\n      &:not(:last-child) {\n        border-right: 2px solid ", ";\n      }\n      .ql-active {\n        color: ", ";\n        background: ", ";\n\n        .ql-stroke {\n          stroke: ", ";\n        }\n      }\n\n      .ql-link {\n        transform: rotate(90deg);\n      }\n    }\n\n    button:hover {\n      color: ", ";\n      background: ", ";\n      .ql-stroke {\n        stroke: ", ";\n      }\n    }\n  }\n  .ql-container.ql-snow {\n  //  border: 1px solid ", ";\n    border-top: 0;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    font-size: 14px;\n\n    .ql-editor.ql-blank::before {\n      font-size: 14px;\n      color: ", ";\n      font-style: normal;\n    }\n\n    .ql-editor ol,\n    .ql-editor ul {\n      padding-inline-start: 0;\n    }\n\n    a {\n      color: ", ";\n    }\n    ", ";\n  }\n"], ["\n  .ql-toolbar.ql-snow {\n    display: flex;\n    align-items: center;\n   // border: 1px solid ", ";\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    color: ", ";\n    padding: 0;\n    padding-left: 5px;\n    height: 33px;\n    .ql-formats {\n      display: flex;\n      align-items: center;\n      padding-right: 5px;\n      margin-right: 5px;\n      height: 16px;\n      &:not(:last-child) {\n        border-right: 2px solid ", ";\n      }\n      .ql-active {\n        color: ", ";\n        background: ", ";\n\n        .ql-stroke {\n          stroke: ", ";\n        }\n      }\n\n      .ql-link {\n        transform: rotate(90deg);\n      }\n    }\n\n    button:hover {\n      color: ", ";\n      background: ", ";\n      .ql-stroke {\n        stroke: ", ";\n      }\n    }\n  }\n  .ql-container.ql-snow {\n  //  border: 1px solid ", ";\n    border-top: 0;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    font-size: 14px;\n\n    .ql-editor.ql-blank::before {\n      font-size: 14px;\n      color: ", ";\n      font-style: normal;\n    }\n\n    .ql-editor ol,\n    .ql-editor ul {\n      padding-inline-start: 0;\n    }\n\n    a {\n      color: ", ";\n    }\n    ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark25;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark85;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.medium5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.medium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.medium;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark85;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark85;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark25;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark25;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.medium;
}, styled_system_1.height);
exports.TextEditor = function (_a) {
    var height = _a.height, props = __rest(_a, ["height"]);
    if (!process.browser) {
        return null;
    }
    var ReactQuill = require('react-quill');
    return (React.createElement(QuillEditor, { height: height },
        React.createElement(ReactQuill, __assign({}, props))));
};
exports.TextEditor.defaultProps = {
    modules: defaultModules,
};
var templateObject_1;
//# sourceMappingURL=TextEditor.js.map