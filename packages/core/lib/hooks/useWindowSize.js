"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useWindowSize = function () {
    var isClient = typeof window === 'object';
    var getSize = react_1.useCallback(function () { return ({
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
    }); }, [isClient]);
    var _a = react_1.useState(getSize), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        if (!isClient) {
            return false;
        }
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [getSize, isClient]);
    return windowSize;
};
//# sourceMappingURL=useWindowSize.js.map