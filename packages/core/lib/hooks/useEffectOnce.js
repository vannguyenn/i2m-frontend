"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useEffectOnce = function (effect) {
    return react_1.useEffect(function () {
        effect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
//# sourceMappingURL=useEffectOnce.js.map