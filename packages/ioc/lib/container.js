"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
require("reflect-metadata");
exports.container = new inversify_1.Container();
exports.provide = inversify_binding_decorators_1.makeProvideDecorator(exports.container);
exports.fluentProvide = inversify_binding_decorators_1.makeFluentProvideDecorator(exports.container);
//# sourceMappingURL=container.js.map