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
/**
 * This component demonstrates use of the '#' state parameter, which updates the url hash.
 * The '#' parameter is implicitly available.
 *
 * Note: the parameter value is cleared when clicking a top-level nav link, "Foo", "Bar", "Baz"
 * using `{ inherit: false }`
 */
var template = "\n<h5>Nest 2 component</h5>\n\n<a uiSref=\".\" [uiParams]=\"{ '#': 'asdf' }\" uiSrefActive=\"active\" >anchor asdf</a> <br>\n<a uiSref=\".\" [uiParams]=\"{ '#': 'fhqwhgads' }\" uiSrefActive=\"active\" >anchor fhqwhgads</a>\n";
var Nest2Component = (function () {
    function Nest2Component() {
    }
    Nest2Component = __decorate([
        core_1.Component({
            selector: 'nest1',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], Nest2Component);
    return Nest2Component;
}());
exports.Nest2Component = Nest2Component;
//# sourceMappingURL=nest2.component.js.map