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
exports.Checkbox = void 0;
var checkbox_1 = require("@ark-ui/react/checkbox");
var lu_1 = require("react-icons/lu");
var Checkbox = function (_a) {
    var children = _a.children, icon = _a.icon, props = __rest(_a, ["children", "icon"]);
    return (<checkbox_1.Checkbox.Root {...props}>
      {children && <checkbox_1.Checkbox.Label>{children}</checkbox_1.Checkbox.Label>}
      <checkbox_1.Checkbox.Control>
        <checkbox_1.Checkbox.Indicator>{icon || <lu_1.LuCheck />}</checkbox_1.Checkbox.Indicator>
      </checkbox_1.Checkbox.Control>
      <checkbox_1.Checkbox.HiddenInput />
    </checkbox_1.Checkbox.Root>);
};
exports.Checkbox = Checkbox;
