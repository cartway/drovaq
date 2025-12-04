"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordAfterReset = exports.resetPasswordforEmail = exports.resendConfirmationEmail = exports.logIn = exports.signUp = void 0;
var utils_1 = require("../../utils");
var signUp = function (payload, role, redirOrigin) { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, uploadPromises, _a, id_document_url, cac_certificate_url, _b, error, data;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                supabase = (0, utils_1.createClient)();
                uploadPromises = [];
                if (payload.id_document) {
                    uploadPromises.push((0, utils_1.uploadImage)(payload.id_document, utils_1.STORAGE_BUCKET.DROVAC_BUCKET));
                }
                else {
                    uploadPromises.push(Promise.resolve(undefined));
                }
                if (payload.cac_certificate) {
                    uploadPromises.push((0, utils_1.uploadImage)(payload.cac_certificate, utils_1.STORAGE_BUCKET.DROVAC_BUCKET));
                }
                else {
                    uploadPromises.push(Promise.resolve(undefined));
                }
                return [4 /*yield*/, Promise.all(uploadPromises)];
            case 1:
                _a = _c.sent(), id_document_url = _a[0], cac_certificate_url = _a[1];
                return [4 /*yield*/, supabase.auth.signUp({
                        email: payload.email,
                        password: payload.password,
                        options: {
                            emailRedirectTo: "".concat(redirOrigin, "/auth/confirm"),
                            data: {
                                role: role,
                                first_name: payload.first_name,
                                last_name: payload.last_name,
                                phone: payload.phone,
                                id_type: payload.id_type || null,
                                id_document_url: id_document_url || null,
                                vehicle_make: payload.vehicle_make || null,
                                license_plate_number: payload.license_plate_number || null,
                                business_name: payload.business_name || null,
                                cac_certificate_url: cac_certificate_url || null,
                            },
                        },
                    })];
            case 2:
                _b = _c.sent(), error = _b.error, data = _b.data;
                // data.user.
                if (error) {
                    console.error(error.code + ' ' + error.message);
                    throw new Error('Error signing up: ' + error.message);
                }
                else {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
var logIn = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var supabase, _c, error, data;
    var email = _b.email, password = _b.password;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                supabase = (0, utils_1.createClient)();
                return [4 /*yield*/, supabase.auth.signInWithPassword({
                        email: email,
                        password: password,
                    })];
            case 1:
                _c = _d.sent(), error = _c.error, data = _c.data;
                if (error) {
                    console.error(error.code + ' ' + error.message);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
exports.logIn = logIn;
var resendConfirmationEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                supabase = (0, utils_1.createClient)();
                return [4 /*yield*/, supabase.auth.resend({
                        type: 'signup',
                        email: email,
                        options: {
                            emailRedirectTo: "".concat(window.location.origin, "/auth/confirm"),
                        },
                    })];
            case 1:
                error = (_a.sent()).error;
                if (error) {
                    console.error('Error resending confirmation email: ' + error.message);
                    throw new Error(error.message);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.resendConfirmationEmail = resendConfirmationEmail;
var resetPasswordforEmail = function (email, redirOrigin) { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, _a, error, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                supabase = (0, utils_1.createClient)();
                return [4 /*yield*/, supabase.auth.resetPasswordForEmail(email, {
                        redirectTo: "".concat(redirOrigin),
                    })];
            case 1:
                _a = _b.sent(), error = _a.error, data = _a.data;
                if (error) {
                    console.error('Error sending reset email: ' + error.message);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
exports.resetPasswordforEmail = resetPasswordforEmail;
var updatePasswordAfterReset = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, _a, error, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                supabase = (0, utils_1.createClient)();
                return [4 /*yield*/, supabase.auth.updateUser({ password: password })];
            case 1:
                _a = _b.sent(), error = _a.error, data = _a.data;
                if (error) {
                    console.error('Error setting password: ' + error.message);
                    throw new Error(error.message);
                }
                return [2 /*return*/, data];
        }
    });
}); };
exports.updatePasswordAfterReset = updatePasswordAfterReset;
