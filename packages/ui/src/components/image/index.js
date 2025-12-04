'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var image_1 = require("next/image");
/**
 * Chakra-UI Next-Image component,
 * this component is a combination of chakra ui & next-image to add chakra responsiveness to next-image
 * @param props
 * @returns
 */
// NextImage Component
var NextImage = function (props) {
    var src = props.src, quality = props.quality, alt = props.alt, style = props.style, rest = __rest(props, ["src", "quality", "alt", "style"]);
    // Define default style
    var defaultStyle = {
        objectFit: 'cover',
    };
    // Merge incoming style with default
    var mergedStyle = __assign(__assign({}, defaultStyle), style);
    var toBase64 = function (str) {
        return typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);
    };
    var shimmer = function (w, h) { return "\n  <svg width=\"".concat(w, "\" height=\"").concat(h, "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n      <linearGradient id=\"g\">\n        <stop stop-color=\"#20BEB8\" offset=\"20%\" />\n        <stop stop-color=\"#0C4C49\" offset=\"50%\" />\n        <stop stop-color=\"#20BEB8\" offset=\"70%\" />\n      </linearGradient>\n    </defs>\n    <rect width=\"").concat(w, "\" height=\"").concat(h, "\" fill=\"#20BEB8\" />\n    <rect id=\"r\" width=\"").concat(w, "\" height=\"").concat(h, "\" fill=\"url(#g)\" />\n    <animate xlink:href=\"#r\" attributeName=\"x\" from=\"-").concat(w, "\" to=\"").concat(w, "\" dur=\"1s\" repeatCount=\"indefinite\"  />\n  </svg>"); };
    return (<div style={{
            position: 'relative',
            height: 'full',
            width: 'full',
            overflow: 'hidden',
        }} {...rest}>
      <image_1.default style={mergedStyle} fill={true} src={src} alt={alt} quality={quality || 100} placeholder='blur' blurDataURL={"data:image/svg+xml;base64,".concat(toBase64(shimmer(700, 475)))}/>
    </div>);
};
exports.default = NextImage;
