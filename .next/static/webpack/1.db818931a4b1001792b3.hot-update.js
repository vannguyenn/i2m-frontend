webpackHotUpdate(1,{

/***/ "./packages/constants/src/constants.ts":
/*!*********************************************!*\
  !*** ./packages/constants/src/constants.ts ***!
  \*********************************************/
/*! exports provided: PATHS, KEYS, SERVICES, VALIDATION_MESSAGE, ERROR_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATHS", function() { return PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_MESSAGE", function() { return VALIDATION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODE", function() { return ERROR_CODE; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);

var PATHS = {
  login: '/login',
  signup: '/register',
  myInfluencer: '/my-influencers',
  myProfile: '/my-profile',
  influencers: '/influencers',
  detail: '/influencers/detail?tab=stats'
};
var KEYS = {
  MASTER_DATA: 'MASTER_DATA',
  ACCESS_TOKEN: 'x-access-token',
  CURRENT_USER_ID: 'currentUserId'
};
var SERVICES = {
  BaseService: _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('BaseService')
};
var VALIDATION_MESSAGE = {
  REQUIRED: 'This field is required.',
  EMAIL: 'Please enter a valid email address.',
  MAX_LENGTH: function MAX_LENGTH(maxLength) {
    return "Only contain maximum ".concat(maxLength, " characters.");
  }
};
var ERROR_CODE = {
  existed_username: 'existed-username',
  existed_email: 'existed-email'
};

/***/ }),

/***/ "./packages/ui/src/index.ts":
/*!**********************************!*\
  !*** ./packages/ui/src/index.ts ***!
  \**********************************/
/*! exports provided: themes, styles, Button, Input, Layout, Form, Icon, Checkbox, Select, Card, Avatar, Divider, MasterLayout, Slider, Table, Popover, Drawer */
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
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table */ "./packages/ui/src/table/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_14__; });
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popover */ "./packages/ui/src/popover/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover__WEBPACK_IMPORTED_MODULE_15__; });
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./drawer */ "./packages/ui/src/drawer/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _drawer__WEBPACK_IMPORTED_MODULE_16__; });



















/***/ })

})
//# sourceMappingURL=1.db818931a4b1001792b3.hot-update.js.map