"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var constants_1 = require("./constants");
var createDecorator = function (identifier, name, scope) {
    var decorator = container_1.fluentProvide(identifier);
    if (scope === constants_1.SCOPE.SINGLETON) {
        return decorator
            .inSingletonScope()
            .whenTargetNamed(name)
            .done();
    }
    return decorator.whenTargetNamed(name).done();
};
exports.Field = function (name, scope) {
    if (scope === void 0) { scope = constants_1.SCOPE.SINGLETON; }
    return createDecorator(constants_1.FIELD, name, scope);
};
exports.Store = function (identifier, scope) {
    if (scope === void 0) { scope = constants_1.SCOPE.SINGLETON; }
    return createDecorator(identifier, constants_1.STORE, scope);
};
exports.Service = function (identifier, scope) {
    if (scope === void 0) { scope = constants_1.SCOPE.SINGLETON; }
    return createDecorator(identifier, constants_1.SERVICE, scope);
};
exports.singleton = function (identifier) {
    return container_1.fluentProvide(identifier)
        .inSingletonScope()
        .done();
};
//# sourceMappingURL=decorator.js.map