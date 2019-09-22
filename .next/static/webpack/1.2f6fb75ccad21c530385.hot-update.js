webpackHotUpdate(1,{

/***/ "./features/influencer/detail/InfluencerDetail.tsx":
/*!*********************************************************!*\
  !*** ./features/influencer/detail/InfluencerDetail.tsx ***!
  \*********************************************************/
/*! exports provided: InfluencerDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerDetail", function() { return InfluencerDetail; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Tab */ "./features/influencer/detail/component/Tab.tsx");
/* harmony import */ var _component_StatsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/StatsSection */ "./features/influencer/detail/component/StatsSection.tsx");

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/InfluencerDetail.tsx";





var Content = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "InfluencerDetail__Content",
  componentId: "sc-7py668-0"
})(["min-height:calc(100vh - 180px);max-height:calc(100vh - 180px);overflow:auto;background:#f3f4f6;padding:20px 60px 50px 60px;"]);
var GeneralInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex).withConfig({
  displayName: "InfluencerDetail__GeneralInfo",
  componentId: "sc-7py668-1"
})(["padding:20px 20px 20px 80px;margin-bottom:30px;"]);
var Fullname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "InfluencerDetail__Fullname",
  componentId: "sc-7py668-2"
})(["font-weight:600;color:#000000;font-size:24px;letter-spacing:0.5px;"]);
var Username = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "InfluencerDetail__Username",
  componentId: "sc-7py668-3"
})(["color:", ";font-size:16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark100;
});
var NumberUnit = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Username).withConfig({
  displayName: "InfluencerDetail__NumberUnit",
  componentId: "sc-7py668-4"
})(["font-size:18px;margin-right:30px;"]);
var NumberText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "InfluencerDetail__NumberText",
  componentId: "sc-7py668-5"
})(["font-size:18px;margin-right:5px;"]);
var AvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "InfluencerDetail__AvatarContainer",
  componentId: "sc-7py668-6"
})(["position:relative;"]);
var BlueTick = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "InfluencerDetail__BlueTick",
  componentId: "sc-7py668-7"
})(["position:absolute;right:0;"]);

var tabContents = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _component_Tab__WEBPACK_IMPORTED_MODULE_4__["TAB_KEYS"].stats, function () {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_StatsSection__WEBPACK_IMPORTED_MODULE_5__["StatsSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  });
});

var InfluencerDetail = function InfluencerDetail(_ref2) {
  var profileUrl = _ref2.profileUrl,
      fullname = _ref2.fullname,
      username = _ref2.username,
      numOfFollowers = _ref2.numOfFollowers,
      numOfFollowing = _ref2.numOfFollowing,
      numOfPosts = _ref2.numOfPosts,
      email = _ref2.email,
      tab = _ref2.tab;
  var TabContent = tabContents[tab];
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    style: {
      position: 'relative'
    },
    bg: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GeneralInfo, {
    flexDirection: "row",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AvatarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 150,
    src: profileUrl || '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BlueTick, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: "/static/image/blue-tick.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    ml: "50px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fullname, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, fullname || 'John Doe'), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, username && "@".concat(username) || '@johndoe'), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    mt: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "".concat(numOfPosts || 3.7, "K")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "".concat(numOfFollowers || 1.2, "M")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "".concat(numOfFollowing || 467)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Following")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    mt: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      fontWeight: 600,
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, email || 'johndoe@gmail.com')), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      color: '#3c3c3c',
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_component_Tab__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    tab: tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TabContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=1.2f6fb75ccad21c530385.hot-update.js.map