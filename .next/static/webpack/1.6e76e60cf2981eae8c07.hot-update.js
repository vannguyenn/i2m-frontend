webpackHotUpdate(1,{

/***/ "./features/influencer/detail/component/StatsSection.tsx":
/*!***************************************************************!*\
  !*** ./features/influencer/detail/component/StatsSection.tsx ***!
  \***************************************************************/
/*! exports provided: StatsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsSection", function() { return StatsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/component/StatsSection.tsx";





var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StatsSection__Title",
  componentId: "sc-1mkig5l-0"
})(["padding-left:20px;font-weight:600;font-size:16px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey100;
});
var Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "StatsSection__Section",
  componentId: "sc-1mkig5l-1"
})(["padding:20px 0;"]);
var Card = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "StatsSection__Card",
  componentId: "sc-1mkig5l-2"
})(["background:#ffffff;height:200px;padding:20px 30px;"]);
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StatsSection__CardTitle",
  componentId: "sc-1mkig5l-3"
})(["color:#727f86;font-size:16px;"]);
var IconContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "StatsSection__IconContainer",
  componentId: "sc-1mkig5l-4"
})(["width:50px;height:50px;border-radius:50%;font-size:20px;", ";"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"]);
var NumberTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StatsSection__NumberTag",
  componentId: "sc-1mkig5l-5"
})(["color:#173c51;font-size:30px;font-weight:700;"]);
var PercentageTag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StatsSection__PercentageTag",
  componentId: "sc-1mkig5l-6"
})(["color:#173c51;font-size:20px;font-weight:500;margin-left:15px;"]);
var StatsSection = function StatsSection(_ref2) {
  var avgLikePerPost = _ref2.avgLikePerPost,
      likePercentage = _ref2.likePercentage,
      replyPercentage = _ref2.replyPercentage,
      avgRepliesPerPost = _ref2.avgRepliesPerPost,
      avgViewPerVideo = _ref2.avgViewPerVideo,
      numOfFollowers = _ref2.numOfFollowers,
      imageEngagment = _ref2.imageEngagment,
      videoEngagment = _ref2.videoEngagment,
      postPerDay = _ref2.postPerDay,
      postPerWeek = _ref2.postPerWeek,
      estimatedPostValue = _ref2.estimatedPostValue,
      engagementRate = _ref2.engagementRate;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Section, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Instagram Stats Overview"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridGap: 10,
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Avg likes per post"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#FDDFDF",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "heart",
    theme: "filled",
    color: "#F12B2C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "".concat(avgLikePerPost || 59.3, "K")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PercentageTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "(".concat(likePercentage || 4.8, "%)")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Avg replies per post"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#FFF6D9",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "wechat",
    theme: "filled",
    color: "#F4AE1F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "".concat(avgRepliesPerPost || 169.8)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PercentageTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "(".concat(replyPercentage || 0.1, "%)")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Avg views per video"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#F8E1F3",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "video-camera",
    theme: "filled",
    color: "#8857FC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "".concat(avgViewPerVideo || 171.6, "K")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Followers/Following"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#DAEDFE",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "user",
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "".concat(numOfFollowers || 2.6, "K")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Images engagement"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#FFF6D9",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "file-image",
    theme: "filled",
    color: "#F4AE1F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "".concat(imageEngagment || 4.9, "%")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Card, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Videos engagement"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconContainer, {
    bg: "#f8e1f3",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "video-camera",
    theme: "filled",
    color: "#cb38ae",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    mt: "10px",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "".concat(videoEngagment || 171.6, "K"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    p: "20px 0",
    mt: "50px",
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Posts per Day"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, postPerDay || 1.4)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Posts per Week"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, postPerWeek || 10)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Estimated Post value"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "$".concat(estimatedPostValue || 10830))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Avg. Engagement Rate"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "".concat(engagementRate || 4.83, "%")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridGap: 10,
    gridTemplateColumns: "1fr 1fr",
    mt: "50px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Box, {
    style: {
      background: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Box, {
    style: {
      background: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=1.6e76e60cf2981eae8c07.hot-update.js.map