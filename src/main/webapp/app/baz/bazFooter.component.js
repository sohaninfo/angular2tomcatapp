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
 * This component is shown in the footer when any baz state is active.
 * It receives the `bazList` resolve data and displays the count of baz objects loaded.
 */
var BazFooterComponent = (function () {
    function BazFooterComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BazFooterComponent.prototype, "bazList", void 0);
    BazFooterComponent = __decorate([
        core_1.Component({
            selector: 'baz-footer',
            styles: ['h4 { border-top: 2px solid black; margin-top: 1em; }'],
            template: "<h4>Baz Module Active - {{ bazList.length }} bazs</h4>"
        }), 
        __metadata('design:paramtypes', [])
    ], BazFooterComponent);
    return BazFooterComponent;
}());
exports.BazFooterComponent = BazFooterComponent;
//# sourceMappingURL=bazFooter.component.js.map