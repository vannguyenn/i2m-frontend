webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./packages/ui/src/card/InfluencerCard.tsx":
/*!*************************************************!*\
  !*** ./packages/ui/src/card/InfluencerCard.tsx ***!
  \*************************************************/
/*! exports provided: InfluencerCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerCard", function() { return InfluencerCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./packages/ui/src/card/Card.tsx");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ "./packages/ui/src/layout/index.ts");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar */ "./packages/ui/src/avatar/index.ts");
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../divider */ "./packages/ui/src/divider/index.ts");
var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/packages/ui/src/card/InfluencerCard.tsx";






var NumberOfFollowers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "InfluencerCard__NumberOfFollowers",
  componentId: "sc-1q8wdty-0"
})(["font-weight:700;margin-top:15px;font-size:20px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grey100;
});
var FullName = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberOfFollowers).withConfig({
  displayName: "InfluencerCard__FullName",
  componentId: "sc-1q8wdty-1"
})(["margin-top:10px;"]);
var Biography = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "InfluencerCard__Biography",
  componentId: "sc-1q8wdty-2"
})(["text-align:center;margin-top:5px;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grey100;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "InfluencerCard__Title",
  componentId: "sc-1q8wdty-3"
})(["color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.grey100;
});
var NumberContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberOfFollowers).withConfig({
  displayName: "InfluencerCard__NumberContainer",
  componentId: "sc-1q8wdty-4"
})(["font-size:14px;margin-top:0;"]);
var InfluencerCard = function InfluencerCard(_ref4) {
  var profileUrl = _ref4.profileUrl,
      numberOfFollowers = _ref4.numberOfFollowers,
      fullname = _ref4.fullname,
      biography = _ref4.biography,
      engagementRate = _ref4.engagementRate,
      likesPerPost = _ref4.likesPerPost,
      width = _ref4.width;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    bordered: false,
    width: width,
    mt: "60px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_avatar__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    size: 150,
    src: profileUrl || '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberOfFollowers, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "".concat(numberOfFollowers, "M")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "FOLLOWERS"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FullName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, fullname), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Biography, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, biography), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_divider__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    type: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridGap: "70px",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "ENGAGEMENT"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "".concat(engagementRate, "%"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "LIKES PER POST"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NumberContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "".concat(likesPerPost, "K"))))));
};

/***/ })

})
//# sourceMappingURL=_app.js.09cd95cf1cca9e0f3a03.hot-update.js.map