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
// import { Text, TextSize } from '../typography'
require("antd/lib/notification/style/index.css");
require("antd/lib/icon/style/index.css");
var themes_1 = require("../themes");
exports.GROVE_NOTIFICATION = 'grove-notification';
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n"])));
var ActionsContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var MessageText = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 20px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  margin-right: 20px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var MessageContent = function (_a) {
    var message = _a.message, actionComponent = _a.actionComponent;
    return (React.createElement(styled_components_1.ThemeProvider, { theme: themes_1.themeBase },
        React.createElement(Container, null,
            React.createElement(MessageText, null, message),
            React.createElement(ActionsContainer, null,
                React.createElement("div", null, actionComponent)))));
};
var openNotification = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'open' : _b, actionComponent = _a.actionComponent, message = _a.message, props = __rest(_a, ["type", "actionComponent", "message"]);
    var messageKey = "" + Date.now();
    var onCloseMessage = function () {
        antd_1.notification.close(messageKey);
    };
    return antd_1.notification[type](__assign({ key: messageKey, className: exports.GROVE_NOTIFICATION, message: (React.createElement(MessageContent, { message: message, onCloseMessage: onCloseMessage, actionComponent: actionComponent })) }, props));
};
exports.notification = {
    open: function (props) { return openNotification(props); },
    success: function (props) {
        return openNotification(__assign({}, props, { type: 'success' }));
    },
    error: function (props) {
        return openNotification(__assign({}, props, { type: 'error' }));
    },
    info: function (props) {
        return openNotification(__assign({}, props, { type: 'info' }));
    },
    warning: function (props) {
        return openNotification(__assign({}, props, { type: 'warning' }));
    },
    close: function (key) { return antd_1.notification.close(key); },
    config: function (props) { return antd_1.notification.config(props); },
    destroy: function () { return antd_1.notification.destroy(); },
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Notification.js.map