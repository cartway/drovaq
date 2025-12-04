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
exports.Input = Input;
var React = require("react");
var utils_1 = require("../../utils/utils");
var class_variance_authority_1 = require("class-variance-authority");
var field_1 = require("@ark-ui/react/field");
var inputVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        variant: {
            auth: 'h-[44px] border border-[#F2F4F7] bg-[#F9FAFB] text-[14px] rounded-[15px] leading-[20px] font-medium text-[#101828] focus-visible:border-[#650BFF] focus-visible:shadow-[0px_0px_0px_2px_#650BFF40]',
        },
    },
});
function Input(_a) {
    var className = _a.className, type = _a.type, variant = _a.variant, props = __rest(_a, ["className", "type", "variant"]);
    return (<field_1.Field.Input asChild>
      <input type={type} data-slot='input' className={(0, utils_1.cn)('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 
        // 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', inputVariants({ variant: variant, className: className }))} {...props}/>
    </field_1.Field.Input>);
}
