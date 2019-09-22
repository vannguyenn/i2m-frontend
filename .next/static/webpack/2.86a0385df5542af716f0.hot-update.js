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
var InfluencerDetail = function InfluencerDetail(_ref) {
  var profileUrl = _ref.profileUrl;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["MasterLayout"].MasterLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GeneralInfo, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"].Avatar, {
    size: 150,
    src: profileUrl || '/static/image/user.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=2.86a0385df5542af716f0.hot-update.js.map