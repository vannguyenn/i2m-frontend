"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Card_1 = require("./Card");
var layout_1 = require("../layout");
var avatar_1 = require("../avatar");
var divider_1 = require("../divider");
var router_1 = require("next/router");
var constants_1 = require("@frontend/constants");
var numeral_1 = require("numeral");
var NumberOfFollowers = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 700;\n  margin-top: 15px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: ", ";\n"], ["\n  font-weight: 700;\n  margin-top: 15px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey100;
});
var FullName = styled_components_1.default(NumberOfFollowers)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 10px;\n  text-transform: unset;\n"], ["\n  margin-top: 10px;\n  text-transform: unset;\n"])));
var Biography = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  margin-top: 5px;\n  color: ", ";\n"], ["\n  text-align: center;\n  margin-top: 5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey100;
});
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.grey100;
});
var NumberContainer = styled_components_1.default(NumberOfFollowers)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 14px;\n  margin-top: 0;\n"], ["\n  font-size: 14px;\n  margin-top: 0;\n"])));
exports.InfluencerCard = function (_a) {
    var id = _a.id, fullName = _a.fullName, profilePicUrl = _a.profilePicUrl, biography = _a.biography, followers = _a.followers, engagement = _a.engagement, width = _a.width;
    return (React.createElement(Card_1.Card, { bordered: false, width: width, mt: "60px", onClick: function () {
            return router_1.default.push(constants_1.PATHS.influencerDetail + "?id=" + id + "&tab=stats");
        } },
        React.createElement(layout_1.Flex, { width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" },
            React.createElement(avatar_1.Avatar, { size: 150, src: profilePicUrl || '/static/image/user.png' }),
            React.createElement(NumberOfFollowers, null, (followers && numeral_1.default(followers).format('(0.0a)')) || 0),
            React.createElement(Title, null, "FOLLOWERS"),
            React.createElement(FullName, null, fullName),
            React.createElement(Biography, null, biography),
            React.createElement(divider_1.Divider, { type: "horizontal" }),
            React.createElement(layout_1.Grid, { gridGap: "70px", gridTemplateColumns: "1fr 1fr", justifyContent: "center" },
                React.createElement(layout_1.Flex, { flexDirection: "column", justifyContent: "flex-start", alignItems: "center" },
                    React.createElement(Title, null, "ENGAGEMENT"),
                    React.createElement(NumberContainer, null, (engagement && numeral_1.default(engagement).format('0.00%')) || 0)),
                React.createElement(layout_1.Flex, { flexDirection: "column", justifyContent: "flex-start", alignItems: "center" },
                    React.createElement(Title, null, "LIKES PER POST"),
                    React.createElement(NumberContainer, null, 0))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=InfluencerCard.js.map