webpackHotUpdate(2,{

/***/ "./features/influencer/detail/InfluencerDetail.tsx":
/*!*********************************************************!*\
  !*** ./features/influencer/detail/InfluencerDetail.tsx ***!
  \*********************************************************/
/*! exports provided: InfluencerDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerDetail", function() { return InfluencerDetail; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/InfluencerDetail.tsx";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 18px;\n  margin-right: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 18px;\n  margin-right: 30px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 600;\n  color: #000000;\n  font-size: 24px;\n  letter-spacing: 0.5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #ffffff;\n  padding: 20px 20px 20px 80px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: calc(100vh - 180px);\n  max-height: calc(100vh - 180px);\n  overflow: auto;\n  background: #f3f4f6;\n  padding: 20px 60px 50px 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Content = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex)(_templateObject());
var GeneralInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex)(_templateObject2());
var Fullname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var Username = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark100;
});
var NumberUnit = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(Username)(_templateObject5());
var NumberText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6());
var InfluencerDetail = function InfluencerDetail(_ref2) {
  var profileUrl = _ref2.profileUrl,
      fullname = _ref2.fullname,
      username = _ref2.username,
      numOfFollowers = _ref2.numOfFollowers,
      numOfFollowing = _ref2.numOfFollowing,
      numOfPosts = _ref2.numOfPosts,
      email = _ref2.email;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GeneralInfo, {
    flexDirection: "row",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 150,
    src: profileUrl || '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "column",
    ml: "50px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fullname, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, fullname || 'John Doe'), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Username, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, username && "@".concat(username) || '@johndoe'), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    mt: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "".concat(numOfPosts || 3.7, "K")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "".concat(numOfFollowers || 1.2, "M")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Followers"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "".concat(numOfFollowing || 467)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberUnit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Following")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    mt: "5px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Email:", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      fontWeight: 600,
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, email || 'johndoe@gmail.com')), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      color: '#3c3c3c',
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
};

/***/ })

})
//# sourceMappingURL=2.199216af7a9f3900414c.hot-update.js.map