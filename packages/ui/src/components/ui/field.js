"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var utils_1 = require("../../utils/utils");
var field_1 = require("@ark-ui/react/field");
var class_variance_authority_1 = require("class-variance-authority");
var labelVariants = (0, class_variance_authority_1.cva)("", {
    variants: {
        variant: {
            default: "text-[14px] block leading-[20px] font-medium text-[#667485] mb-[8px]",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
var errorTextVariants = (0, class_variance_authority_1.cva)("", {
    variants: {
        variant: {
            default: "text-[14px] leading-[20px] font-medium text-red",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
var helperTextVariants = (0, class_variance_authority_1.cva)("", {
    variants: {
        variant: {
            default: "text-[14px] leading-[20px] font-medium text-[#667485]",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
var Field = function (_a) {
    var children = _a.children, label = _a.label, variant = _a.variant, labelClassName = _a.labelClassName, errorText = _a.errorText, errorTextClassName = _a.errorTextClassName, helperText = _a.helperText, helperTextClassName = _a.helperTextClassName, props = __rest(_a, ["children", "label", "variant", "labelClassName", "errorText", "errorTextClassName", "helperText", "helperTextClassName"]);
    return (<field_1.Field.Root {...props}>
      {label && (<field_1.Field.Label className={(0, utils_1.cn)(labelVariants({ variant: variant, className: labelClassName }))}>
          {label}
        </field_1.Field.Label>)}
      {children}
      {helperText && (<field_1.Field.HelperText className={(0, utils_1.cn)(helperTextVariants({ variant: variant, className: helperTextClassName }))}>
          {helperText}
        </field_1.Field.HelperText>)}
      {errorText && (<field_1.Field.ErrorText className={(0, utils_1.cn)(errorTextVariants({ variant: variant, className: errorTextClassName }))}>
          {errorText}
        </field_1.Field.ErrorText>)}
    </field_1.Field.Root>);
};
exports.Field = Field;
