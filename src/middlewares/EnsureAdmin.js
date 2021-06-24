"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
function ensureAdmin(request, response, next) {
    var admin = true;
    if (admin) {
        return next();
    }
    return response.status(401).json({
        error: "Unauthorized"
    });
}
exports.ensureAdmin = ensureAdmin;
