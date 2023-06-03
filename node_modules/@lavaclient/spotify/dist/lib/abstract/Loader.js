"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
class Loader {
    match(identifier) {
        const regex = this.matchers.find(r => r.test(identifier));
        if (!regex) {
            return null;
        }
        return regex.exec(identifier);
    }
}
exports.Loader = Loader;
