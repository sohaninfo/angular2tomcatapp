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
 * This component is shown in the footer when any bar state is active.
 * It receives the `barList` resolve data and displays the count of bar objects loaded.
 */
var BarFooterComponent = (function () {
    function BarFooterComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BarFooterComponent.prototype, "barList", void 0);
    BarFooterComponent = __decorate([
        core_1.Component({
            selector: 'bar-footer',
            styles: ['h4 { border-top: 2px solid black; margin-top: 1em; }'],
            template: "<h4>Bar Module Active - {{ barList.length }} bars</h4>"
        }), 
        __metadata('design:paramtypes', [])
    ], BarFooterComponent);
    return BarFooterComponent;
}());
exports.BarFooterComponent = BarFooterComponent;
//# sourceMappingURL=barFooter.component.js.map