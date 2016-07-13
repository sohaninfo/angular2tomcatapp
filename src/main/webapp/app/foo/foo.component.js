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
 * This is a simple component which provides two uiSref (links) to two nested states
 * and a <ui-view> viewport for the child states to fill in
 */
var template = "\n<h3>Foo Component</h3>\n\n<a uiSref=\".nest1\" uiSrefActive=\"active\">Nested state 1</a>\n<a uiSref=\".nest2\" uiSrefActive=\"active\">Nested state 2</a>\n\n<ui-view></ui-view>\n";
var FooComponent = (function () {
    function FooComponent() {
    }
    FooComponent = __decorate([
        core_1.Component({
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES],
            selector: 'foo',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], FooComponent);
    return FooComponent;
}());
exports.FooComponent = FooComponent;
//# sourceMappingURL=foo.component.js.map