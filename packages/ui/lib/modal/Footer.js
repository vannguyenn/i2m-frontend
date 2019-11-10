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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var button_1 = require("../button");
var styled_components_1 = require("styled-components");
var OkButton = styled_components_1.default(button_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &&& {\n    height: 35px;\n    border-radius: 2px;\n  }\n"], ["\n  &&& {\n    height: 35px;\n    border-radius: 2px;\n  }\n"])));
exports.CancelButton = styled_components_1.default(button_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &&& {\n    height: 35px;\n    border-radius: 2px;\n    border-color: ", ";\n    color: ", ";\n    background-color: ", ";\n    &:not(.loading) {\n      &:hover {\n        cursor: pointer;\n        background-color: ", ";\n      }\n\n      &:active {\n        background-color: ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n"], ["\n  &&& {\n    height: 35px;\n    border-radius: 2px;\n    border-color: ", ";\n    color: ", ";\n    background-color: ", ";\n    &:not(.loading) {\n      &:hover {\n        cursor: pointer;\n        background-color: ", ";\n      }\n\n      &:active {\n        background-color: ", ";\n      }\n\n      &:disabled {\n        cursor: not-allowed;\n        color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) { return props.theme.colors.dark15; }, function (props) { return props.theme.colors.grey; }, function (props) { return props.theme.colors.dark15; }, function (props) { return props.theme.colors.dark25; }, function (props) { return props.theme.colors.dark45; }, function (props) { return props.theme.colors.grey45; }, function (props) { return props.theme.colors.grey5; });
exports.Footer = function (_a) {
    var handleCancel = _a.handleCancel, handleOk = _a.handleOk, _b = _a.okText, okText = _b === void 0 ? 'Done' : _b, _c = _a.cancelText, cancelText = _c === void 0 ? 'Cancel' : _c, okButtonProps = _a.okButtonProps, cancelButtonProps = _a.cancelButtonProps;
    return (React.createElement("div", { style: { textAlign: 'left' } },
        React.createElement(OkButton, __assign({ htmlType: "submit", type: "primary", onClick: handleOk }, okButtonProps), okText),
        React.createElement(exports.CancelButton, __assign({ onClick: handleCancel }, cancelButtonProps), cancelText)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Footer.js.map