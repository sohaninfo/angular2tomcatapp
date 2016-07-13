"use strict";
var ui_router_ng2_1 = require("ui-router-ng2");
var router_config_1 = require("./router.config");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
ui_router_ng2_1.trace.enable(ui_router_ng2_1.Category.TRANSITION, ui_router_ng2_1.Category.VIEWCONFIG);
platform_browser_dynamic_1.bootstrap(ui_router_ng2_1.UIView, [
    // provide(LocationStrategy, { useClass: HashLocationStrategy }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.PathLocationStrategy }),
    core_1.provide(common_1.PlatformLocation, { useClass: platform_browser_1.BrowserPlatformLocation })
].concat(ui_router_ng2_1.UIROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, [
    // Provide a custom UIRouterConfig to configure UI-Router
    core_1.provide(ui_router_ng2_1.UIRouterConfig, { useClass: router_config_1.MyUIRouterConfig }),
    // Make `directives: [UIROUTER_DIRECTIVES]` optional in a @Component
    // by always including them in the PLATFORM_DIRECTIVCES
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: [ui_router_ng2_1.UIROUTER_DIRECTIVES], multi: true })
]));
//# sourceMappingURL=bootstrap.js.map