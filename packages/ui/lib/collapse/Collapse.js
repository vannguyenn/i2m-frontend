"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
require("antd/lib/collapse/style/index.css");
var styled_components_1 = require("styled-components");
var ui_1 = require("@frontend/ui");
var mobx_react_lite_1 = require("mobx-react-lite");
var text_editor_1 = require("../text-editor");
var layout_1 = require("../layout");
var Panel = antd_1.Collapse.Panel;
var ReceiverFullName = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 18px;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  font-size: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey85;
});
var EmailSubject = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n"], ["\n  color: ", ";\n  font-size: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey65;
});
var TimeStamp = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey65;
});
var EmailTitle = styled_components_1.default(ui_1.Layout.Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  padding: 15px 24px;\n"], ["\n  border-bottom: 1px solid ", ";\n  padding: 15px 24px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey25;
});
var FileUrl = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey65;
});
var customPanelStyle = {
    background: 'white',
    borderRadius: 2,
    margin: 7,
    color: '#FF6265',
    overflow: 'hidden',
    fontWeight: 600,
};
var formatDate = function (date) {
    return new Date(date).toLocaleString('en-US', {
        weekday: 'short',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
    });
};
exports.CollapseForm = mobx_react_lite_1.observer(function (_a) {
    var listHistorySendMail = _a.listHistorySendMail, downloadFile = _a.downloadFile;
    return (React.createElement(antd_1.Collapse, { accordion: true, style: { backgroundColor: '#d4d3d37a', minHeight: '100vh' } }, listHistorySendMail ? (listHistorySendMail.map(function (item, index) { return (React.createElement(Panel, { style: customPanelStyle, header: item.subject + " - " + formatDate(item.sendDate), key: index.toString() },
        React.createElement(EmailTitle, { flexDirection: "row", alignItems: "center" },
            React.createElement(ui_1.Icon.Icon, { type: "mail", fontSize: "18px" }),
            React.createElement(ui_1.Layout.Flex, { flexDirection: "column", justifyContent: "flex-start", ml: "20px" },
                React.createElement(ReceiverFullName, null,
                    "Receiver: ",
                    item.sent ? item.influName : item.fullName),
                React.createElement(EmailSubject, null, item.subject))),
        React.createElement(ui_1.Layout.Flex, { flexDirection: "column", justifyContent: "flex-start", p: "15px 24px" },
            React.createElement(TimeStamp, null, (item.sent ? item.fullName : item.influName) + " <" + (item.sent ? item.email : item.influEmail) + "> wrote:"),
            React.createElement(layout_1.Grid, { mt: "15px" },
                React.createElement(text_editor_1.TextEditorView, { color: "black85", description: item.body })),
            item.fileUrl && (React.createElement(FileUrl, null,
                "Download file :",
                React.createElement("a", { onClick: function () { return downloadFile(item.fileUrl); } }, item.fileUrl)))))); })) : (React.createElement(EmailSubject, { style: { paddingTop: '30px' } },
        React.createElement(ui_1.Empty.Empty, null)))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Collapse.js.map