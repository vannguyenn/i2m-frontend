"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var constants_1 = require("./constants");
exports.useField = function (name) {
    try {
        return container_1.container.getAllNamed(constants_1.FIELD, name).pop();
    }
    catch (error) {
        return undefined;
    }
};
exports.useStore = function (identifier) {
    try {
        return container_1.container.getAllNamed(identifier, constants_1.STORE).pop();
    }
    catch (error) {
        return undefined;
    }
};
exports.useService = function (identifier) {
    try {
        return container_1.container.getAllNamed(identifier, constants_1.SERVICE).pop();
    }
    catch (error) {
        return undefined;
    }
};
exports.useInstance = function (identifier) {
    try {
        return container_1.container.get(identifier);
    }
    catch (error) {
        return undefined;
    }
};
//# sourceMappingURL=hooks.js.map