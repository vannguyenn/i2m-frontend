webpackHotUpdate(1,{

/***/ "./features/influencer/detail/component/MediaSection.tsx":
/*!***************************************************************!*\
  !*** ./features/influencer/detail/component/MediaSection.tsx ***!
  \***************************************************************/
/*! exports provided: MediaSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSection", function() { return MediaSection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _StatsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatsSection */ "./features/influencer/detail/component/StatsSection.tsx");
/* harmony import */ var _frontend_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontend/ui */ "./packages/ui/src/index.ts");

var _jsxFileName = "/Users/vanthihongnguyen/Documents/fpt/CAPSTONE/i2m-frontend/features/influencer/detail/component/MediaSection.tsx";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 400px;\n  max-height: 300px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark100;
});
var LatestPost = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
var MediaSection = function MediaSection() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Best Posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Here are the most liked and talked about posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Grid, {
    gridGap: 10,
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Most Liked Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "heart",
    theme: "filled",
    color: "#F12B2C",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "25.9K")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Most Commented Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "wechat",
    theme: "filled",
    color: "#F4AE1F",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "33.0K")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover3.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Most Engaging Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "dashboard",
    color: "#34c635",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "5.3%"))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Grid, {
    gridGap: 10,
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover5.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover6.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover7.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover8.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LatestPost, {
    src: "/static/image/cover9.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })));
};

/***/ }),

/***/ "./packages/ui/src/index.ts":
/*!**********************************!*\
  !*** ./packages/ui/src/index.ts ***!
  \**********************************/
/*! exports provided: themes, styles, Button, Input, Layout, Form, Icon, Checkbox, Select, Card, Avatar, Divider, MasterLayout, Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./packages/ui/src/form/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./packages/ui/src/styles/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _styles__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ "./packages/ui/src/themes/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return _themes__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./packages/ui/src/button/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./packages/ui/src/input/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./packages/ui/src/layout/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./packages/ui/src/icon/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ "./packages/ui/src/checkbox/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./packages/ui/src/select/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card */ "./packages/ui/src/card/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_9__; });
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./avatar */ "./packages/ui/src/avatar/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _avatar__WEBPACK_IMPORTED_MODULE_10__; });
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./divider */ "./packages/ui/src/divider/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _divider__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _master_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./master-layout */ "./packages/ui/src/master-layout/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MasterLayout", function() { return _master_layout__WEBPACK_IMPORTED_MODULE_12__; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider */ "./packages/ui/src/slider/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _slider__WEBPACK_IMPORTED_MODULE_13__; });
















/***/ })

})
//# sourceMappingURL=1.b873d61ef9d7d141f432.hot-update.js.map