"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordFormSchema = exports.signupFormSchema = exports.loginFormSchema = void 0;
// import * as y from 'yup'
var zod_1 = require("zod");
exports.loginFormSchema = zod_1.z.object({
    email: zod_1.z.email('please enter a valid email').min(1, 'required'),
    password: zod_1.z.string().min(1, 'required'),
});
exports.signupFormSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'required'),
    lastName: zod_1.z.string().min(1, 'required'),
    email: zod_1.z.email('please enter a valid email').min(1, 'required'),
    password: zod_1.z.string().min(1, 'required'),
});
exports.changePasswordFormSchema = zod_1.z.object({
    oldPassword: zod_1.z.string().min(1, 'required'),
    newPassword: zod_1.z.string().min(1, 'required'),
});
