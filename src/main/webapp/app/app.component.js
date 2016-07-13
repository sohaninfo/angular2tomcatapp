"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ui_router_ng2_1 = require("ui-router-ng2");
/**
 * The top level application component.
 *
 * This component renders two uiSref "links" and has a viewport for a child to fill in.
 */
var template = "\n\n<h1>My First UI-Router Angular 2 App</h1>\n\n<a uiSref=\"app.foo\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\">Foo</a>\n<a uiSref=\"app.bar\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\">Bar</a>\n<a uiSref=\"app.baz\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\">Baz</a>\n\n<ui-view></ui-view>\n\n<ui-view name=\"footer\"></ui-view>\n";
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES],
            selector: 'my-app',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map