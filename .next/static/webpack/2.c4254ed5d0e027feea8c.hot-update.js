webpackHotUpdate(2,{

/***/ "./features/influencer-management/ListInfluencerController.tsx":
/*!*********************************************************************!*\
  !*** ./features/influencer-management/ListInfluencerController.tsx ***!
  \*********************************************************************/
/*! exports provided: ListInfluencerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInfluencerController", function() { return ListInfluencerController; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer-management/ListInfluencerController.tsx";



var LeftPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "ListInfluencerController__LeftPanel",
  componentId: "sc-1ifv7a2-0"
})(["min-height:100%;max-height:100%;overflow:auto;width:300px;background:#ffffff;padding:20px 0;"]);
var Content = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "ListInfluencerController__Content",
  componentId: "sc-1ifv7a2-1"
})(["height:calc(100vh - 80px);background:#f3f4f6;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__Title",
  componentId: "sc-1ifv7a2-2"
})(["font-size:20px;"]);
var InfluencerRow = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__InfluencerRow",
  componentId: "sc-1ifv7a2-3"
})(["width:100%;height:50px;border-top:1px solid ", ";display:flex;align-items:center;padding:0 20px;cursor:pointer;border-left:4px solid ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey25;
}, function (_ref2) {
  var theme = _ref2.theme,
      isActive = _ref2.isActive;
  return isActive ? theme.colors.primary : 'transparent';
});
var RightPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "ListInfluencerController__RightPanel",
  componentId: "sc-1ifv7a2-4"
})(["width:calc(100% - 300px);min-height:100%;max-height:100%;overflow:auto;"]);
var RightPanelTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__RightPanelTitle",
  componentId: "sc-1ifv7a2-5"
})(["font-weight:600;font-size:18px;"]);
var MoreOptionBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button).withConfig({
  displayName: "ListInfluencerController__MoreOptionBtn",
  componentId: "sc-1ifv7a2-6"
})(["&&&{border:1px solid ", ";border-radius:2px;background:transparent;font-size:24px;font-weight:bold;color:#000000;padding:0;display:flex;align-items:center;justify-content:center;width:32px;--antd-wave-shadow-color:transparent;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey25;
});
var PopoverContent = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "Rename"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "Delete"));
var IconButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button).withConfig({
  displayName: "ListInfluencerController__IconButton",
  componentId: "sc-1ifv7a2-7"
})(["&&&{background:transparent;--antd-wave-shadow-color:transparent;border:none;color:", ";font-size:16px;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.grey85;
});
var InfluencerCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "ListInfluencerController__InfluencerCard",
  componentId: "sc-1ifv7a2-8"
})(["background:#ffffff;width:100%;margin-bottom:20px;position:relative;"]);
var Fullname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__Fullname",
  componentId: "sc-1ifv7a2-9"
})(["font-size:20px;font-weight:600;"]);
var Username = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__Username",
  componentId: "sc-1ifv7a2-10"
})(["color:", ";font-size:16px;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.grey65;
});
var StatsLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__StatsLabel",
  componentId: "sc-1ifv7a2-11"
})(["font-weight:600;font-size:16px;"]);
var StatsValue = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__StatsValue",
  componentId: "sc-1ifv7a2-12"
})(["color:", ";font-weight:600;font-size:16px;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.grey65;
});
var EmailTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "ListInfluencerController__EmailTitle",
  componentId: "sc-1ifv7a2-13"
})(["border-bottom:1px solid ", ";padding:15px 24px;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.grey25;
});
var ReceiverFullName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__ReceiverFullName",
  componentId: "sc-1ifv7a2-14"
})(["color:", ";font-weight:700;font-size:18px;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.grey85;
});
var EmailSubject = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__EmailSubject",
  componentId: "sc-1ifv7a2-15"
})(["color:", ";font-size:16px;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.grey65;
});
var TimeStamp = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ListInfluencerController__TimeStamp",
  componentId: "sc-1ifv7a2-16"
})(["color:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.grey65;
});

var ActionButton = function ActionButton() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      drawerVisible = _React$useState2[0],
      setDrawerVisible = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    style: {
      position: 'absolute',
      top: '5px',
      right: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "delete",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconButton, {
    onClick: function onClick() {
      return setDrawerVisible(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "clock-circle",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IconButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "mail",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Drawer"].Drawer, {
    title: "Sent Emails",
    visible: drawerVisible,
    onClose: function onClose() {
      return setDrawerVisible(false);
    },
    placement: "right",
    width: 500,
    closable: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EmailTitle, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"].Icon, {
    type: "mail",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    ml: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReceiverFullName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "\"John Doe\""), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EmailSubject, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Re: Room for Interview"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    p: "15px 24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TimeStamp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "On Fri, 13 Sep 2019 at 09:09, Van Nguyen\n<pinkcloudvnn@gmail.com> wrote:\n"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")));
};

var ListInfluencerController = function ListInfluencerController() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].SecondaryLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    flexDirection: "row",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LeftPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    p: "0 20px",
    mb: "25px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "List of leads"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Button"].Button, {
    type: "primary",
    width: "100px",
    style: {
      height: '35px',
      borderRadius: '2px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "New")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InfluencerRow, {
    isActive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Beauty Leads"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InfluencerRow, {
    isActive: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Travel Leads")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RightPanel, {
    flexDirection: "column",
    justifyContent: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    p: "20px 50px 20px 30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RightPanelTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Beauty Leads"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Popover"].Popover, {
    content: PopoverContent,
    trigger: "click",
    placement: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MoreOptionBtn, {
    icon: "more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    p: "0 20px",
    mt: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InfluencerCard, {
    flexDirection: "row",
    alignItems: "flex-start",
    p: "20px 30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 100,
    src: '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    ml: "25px",
    width: "calc(100% - 200px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "2fr 9fr",
    alignContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "center",
    pl: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fullname, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "John Doe"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "@johndoe")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    ml: "80px",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "1.2M")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "4.83%")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "Estimated Post Value"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "1.2M")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    pl: "10px",
    mt: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      fontWeight: 600,
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "johndoe@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ActionButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InfluencerCard, {
    flexDirection: "row",
    alignItems: "flex-start",
    p: "20px 30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 100,
    src: '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    ml: "25px",
    width: "calc(100% - 200px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "2fr 9fr",
    alignContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "center",
    pl: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fullname, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "John Doe"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "@johndoe")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    ml: "80px",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "1.2M")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "4.83%")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "Estimated Post Value"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "1.2M")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    pl: "10px",
    mt: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      fontWeight: 600,
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "johndoe@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ActionButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InfluencerCard, {
    flexDirection: "row",
    alignItems: "flex-start",
    p: "20px 30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 100,
    src: '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    ml: "25px",
    width: "calc(100% - 200px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "2fr 9fr",
    alignContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "center",
    pl: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fullname, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, "John Doe"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "@johndoe")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Grid, {
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    ml: "80px",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "1.2M")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "Engagement"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "4.83%")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "Estimated Post Value"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatsValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "1.2M")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    pl: "10px",
    mt: "10px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      fontWeight: 600,
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "johndoe@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ActionButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }))))));
};

/***/ })

})
//# sourceMappingURL=2.c4254ed5d0e027feea8c.hot-update.js.map