webpackHotUpdate(1,{

/***/ "./features/home/HomeController.tsx":
/*!******************************************!*\
  !*** ./features/home/HomeController.tsx ***!
  \******************************************/
/*! exports provided: HomeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeController", function() { return HomeController; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/home/HomeController.tsx";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "HomeController__Container",
  componentId: "wd6ixc-0"
})(["height:100%;"]);
var Slogan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "HomeController__Slogan",
  componentId: "wd6ixc-1"
})(["font-size:50px;color:#1e2d52;width:100%;text-align:center;margin-top:200px;"]);
var LoginBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button).withConfig({
  displayName: "HomeController__LoginBtn",
  componentId: "wd6ixc-2"
})(["&&&{background-color:transparent;border:none;color:#1e2d52;border-radius:20px;}"]);
var RegisterBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button).withConfig({
  displayName: "HomeController__RegisterBtn",
  componentId: "wd6ixc-3"
})(["&&&{border-radius:20px;text-transform:uppercase;background-color:transparent;font-size:12px;width:100px;margin-left:10px;}"]);
var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "HomeController__SearchContainer",
  componentId: "wd6ixc-4"
})(["width:100%;display:flex;justify-content:center;height:50px;position:absolute;bottom:-25px;align-items:center;"]);
var SearchInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "HomeController__SearchInputContainer",
  componentId: "wd6ixc-5"
})(["width:50%;height:100%;-webkit-box-shadow:-2px 13px 32px -6px rgba(0,0,0,0.19);-moz-box-shadow:-2px 13px 32px -6px rgba(0,0,0,0.19);box-shadow:-2px 13px 32px -6px rgba(0,0,0,0.19);background:#fff;border-radius:5px;margin-right:20px;"]);
var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Input"].Input).withConfig({
  displayName: "HomeController__SearchInput",
  componentId: "wd6ixc-6"
})(["&&&{height:100%;border:none;padding-left:20px;&:hover,&:focus{border-color:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var SearchButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button).withConfig({
  displayName: "HomeController__SearchButton",
  componentId: "wd6ixc-7"
})(["&&&{height:100%;width:130px;text-transform:uppercase;-webkit-box-shadow:1px 6px 25px -5px rgba(255,98,101,1);-moz-box-shadow:1px 6px 25px -5px rgba(255,98,101,1);box-shadow:1px 6px 25px -5px rgba(255,98,101,1);}"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "HomeController__Content",
  componentId: "wd6ixc-8"
})(["width:100%;max-width:100%;overflow:auto;min-height:calc(100vh - 500px);padding:0 50px 50px 50px;"]);
var MoreInfluencerBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Button"].Button).withConfig({
  displayName: "HomeController__MoreInfluencerBtn",
  componentId: "wd6ixc-9"
})(["&&&{background-color:transparent;border-radius:30px;height:50px;}"]);
var influencers = [{
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}, {
  fullname: 'John Doe',
  numberOfFollowers: 1.2,
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  engagementRate: 4.83,
  likesPerPost: 59.3
}];
var HomeController = function HomeController() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "column",
    justifyContent: "flex-start",
    style: {
      backgroundImage: 'url(/static/image/home.png)',
      width: '100%',
      height: '500px',
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    mt: "20px",
    pr: "30px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LoginBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RegisterBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Signup")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Slogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Find the best Instagram influencers for your business."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SearchContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SearchInputContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SearchInput, {
    placeholder: "Search for influencers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SearchButton, {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Search"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Grid, {
    gridGap: 2,
    gridTemplateColumns: "1fr 1fr 1fr",
    mt: "30px",
    justifyItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(influencers, function (influencer, key) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Card"].InfluencerCard, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, influencer, {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Layout"].Flex, {
    justifyContent: "center",
    flexDirection: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MoreInfluencerBtn, {
    mt: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "More Influencers ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"].Icon, {
    type: "arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })))));
};

/***/ })

})
//# sourceMappingURL=1.8cbc7ecf87df4ed87b3f.hot-update.js.map