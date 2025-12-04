'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("@bprogress/next/app");
var theme_provider_1 = require("./components/theme-provider");
var toaster_1 = require("./components/ui/toaster");
var Provider = function (_a) {
    var children = _a.children;
    return (<theme_provider_1.ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
      <app_1.ProgressProvider height='4px' color={'#650bff'} options={{ showSpinner: false }} shallowRouting>
        {children}
      </app_1.ProgressProvider>
      <toaster_1.Toaster />
    </theme_provider_1.ThemeProvider>);
};
exports.default = Provider;
