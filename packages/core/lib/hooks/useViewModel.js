"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useViewModel = function (VmConstructor, params) {
    var vmRef = react_1.useRef(null);
    if (!vmRef.current) {
        vmRef.current = new VmConstructor(params);
    }
    return vmRef.current;
};
//# sourceMappingURL=useViewModel.js.map