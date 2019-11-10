"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEmails = function (text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
};
//# sourceMappingURL=extractEmail.js.map