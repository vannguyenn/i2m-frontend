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
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
require("antd/lib/modal/style/index.css");
var Footer_1 = require("./Footer");
var mediumModalStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* min-width: 616px; */\n  .ant-modal-header {\n    padding: 12px 12px 12px 40px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    background-color: ", ";\n    .ant-modal-title {\n      word-break: break-word;\n      color: #fff;\n    }\n  }\n  .ant-modal-close-x {\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    color: #fff;\n    font-size: 14px;\n  }\n\n  .ant-modal-footer {\n    padding: 12px 12px 12px 40px;\n  }\n\n  .ant-modal-body {\n    padding: 12px 40px;\n    color: #000;\n  }\n"], ["\n  /* min-width: 616px; */\n  .ant-modal-header {\n    padding: 12px 12px 12px 40px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    background-color: ", ";\n    .ant-modal-title {\n      word-break: break-word;\n      color: #fff;\n    }\n  }\n  .ant-modal-close-x {\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    color: #fff;\n    font-size: 14px;\n  }\n\n  .ant-modal-footer {\n    padding: 12px 12px 12px 40px;\n  }\n\n  .ant-modal-body {\n    padding: 12px 40px;\n    color: #000;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var smallModalStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 320px;\n  max-width: 640px;\n\n  &.ant-modal {\n    top: calc(50vh - 200px);\n  }\n  .ant-modal-header {\n    padding: 24px 24px 0 24px;\n    border-bottom: none;\n    .ant-modal-title {\n      word-break: break-word;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 20px;\n    }\n  }\n  .ant-modal-body {\n    padding: 12px 24px 0 24px;\n    color: #000;\n  }\n  .ant-modal-footer {\n    border-top: none;\n    padding: 16px 24px 24px 24px;\n  }\n"], ["\n  min-width: 320px;\n  max-width: 640px;\n\n  &.ant-modal {\n    top: calc(50vh - 200px);\n  }\n  .ant-modal-header {\n    padding: 24px 24px 0 24px;\n    border-bottom: none;\n    .ant-modal-title {\n      word-break: break-word;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 20px;\n    }\n  }\n  .ant-modal-body {\n    padding: 12px 24px 0 24px;\n    color: #000;\n  }\n  .ant-modal-footer {\n    border-top: none;\n    padding: 16px 24px 24px 24px;\n  }\n"])));
var infoModalStyle = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 416px;\n  &.ant-modal {\n    top: calc(50vh - 200px);\n  }\n  .ant-modal-header {\n    padding: 24px 24px 0 24px;\n    border-bottom: none;\n    .ant-modal-title {\n      word-break: break-word;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 20px;\n    }\n  }\n  .ant-modal-body {\n    padding: 24px;\n    color: #000;\n  }\n  .ant-modal-footer {\n    border-top: none;\n    padding: 16px 24px 24px 24px;\n  }\n"], ["\n  min-width: 416px;\n  &.ant-modal {\n    top: calc(50vh - 200px);\n  }\n  .ant-modal-header {\n    padding: 24px 24px 0 24px;\n    border-bottom: none;\n    .ant-modal-title {\n      word-break: break-word;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 20px;\n    }\n  }\n  .ant-modal-body {\n    padding: 24px;\n    color: #000;\n  }\n  .ant-modal-footer {\n    border-top: none;\n    padding: 16px 24px 24px 24px;\n  }\n"])));
var AntMediumModal = function (_a) {
    var onCancel = _a.onCancel, onOk = _a.onOk, okText = _a.okText, cancelText = _a.cancelText, title = _a.title, children = _a.children, okButtonProps = _a.okButtonProps, cancelButtonProps = _a.cancelButtonProps, footer = _a.footer, props = __rest(_a, ["onCancel", "onOk", "okText", "cancelText", "title", "children", "okButtonProps", "cancelButtonProps", "footer"]);
    return (React.createElement(antd_1.Modal, __assign({ onCancel: onCancel, footer: footer || (React.createElement(Footer_1.Footer, { handleCancel: onCancel, handleOk: onOk, okText: okText, cancelText: cancelText, okButtonProps: okButtonProps, cancelButtonProps: cancelButtonProps })), closable: true, title: title }, props), children));
};
exports.MediumModal = styled_components_1.default(AntMediumModal)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), mediumModalStyle);
var AntSmallModal = function (_a) {
    var onCancel = _a.onCancel, onOk = _a.onOk, okText = _a.okText, cancelText = _a.cancelText, children = _a.children, footer = _a.footer, okButtonProps = _a.okButtonProps, cancelButtonProps = _a.cancelButtonProps, props = __rest(_a, ["onCancel", "onOk", "okText", "cancelText", "children", "footer", "okButtonProps", "cancelButtonProps"]);
    return (React.createElement(antd_1.Modal, __assign({ onCancel: onCancel, footer: footer || (React.createElement(Footer_1.Footer, { handleCancel: onCancel, handleOk: onOk, okText: okText, cancelText: cancelText, okButtonProps: okButtonProps, cancelButtonProps: cancelButtonProps })), closable: false, maskClosable: false }, props), children));
};
exports.SmallModal = styled_components_1.default(AntSmallModal)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), smallModalStyle);
var AntInfoModal = function (_a) {
    var onCancel = _a.onCancel, onOk = _a.onOk, okText = _a.okText, cancelText = _a.cancelText, children = _a.children, footer = _a.footer, okButtonProps = _a.okButtonProps, cancelButtonProps = _a.cancelButtonProps, props = __rest(_a, ["onCancel", "onOk", "okText", "cancelText", "children", "footer", "okButtonProps", "cancelButtonProps"]);
    return (React.createElement(antd_1.Modal, __assign({ onCancel: onCancel, footer: null, closable: false, title: null }, props), children));
};
exports.InfoModal = styled_components_1.default(AntInfoModal)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), infoModalStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Modal.js.map