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
var MediaSection = function MediaSection() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Best Posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Here are the most liked and talked about posts"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Grid, {
    gridGap: 10,
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    mt: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Most Liked Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "heart",
    theme: "filled",
    color: "#F12B2C",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "25.9K")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Most Commented Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "wechat",
    theme: "filled",
    color: "#F4AE1F",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "33.0K")))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Card"].Card, {
    bordered: false,
    cover: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      alt: "example",
      src: "/static/image/cover2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CardTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Most Engaging Post"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Layout"].Flex, {
    flexDirection: "row",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_frontend_ui__WEBPACK_IMPORTED_MODULE_4__["Icon"].Icon, {
    type: "dashboard",
    color: "#34c635",
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_StatsSection__WEBPACK_IMPORTED_MODULE_3__["NumberTag"], {
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "33.0K"))))));
};

/***/ })

})
//# sourceMappingURL=1.9dc6ad9930d878db3911.hot-update.js.map