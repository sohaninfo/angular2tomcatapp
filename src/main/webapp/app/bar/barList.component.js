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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ui_router_ng2_1 = require("ui-router-ng2");
/**
 * This component has "barList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the bar details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */
var template = "\n<h3>Bar Component</h3>\n\n<ul>\n  <li *ngFor=\"let bar of bars\">\n    <a uiSref=\".details\" [uiParams]=\"{barId: bar.id}\" uiSrefActive=\"active\">{{bar.name}}</a>\n  </li>\n</ul>\n\n<ui-view></ui-view>\n";
var BarListComponent = (function () {
    // resolve data injected by name 'barList' into 'bars' property
    function BarListComponent(bars) {
        this.bars = bars;
    }
    BarListComponent = __decorate([
        core_1.Component({
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES],
            selector: 'bar',
            template: template
        }),
        __param(0, core_1.Inject("barList")), 
        __metadata('design:paramtypes', [Object])
    ], BarListComponent);
    return BarListComponent;
}());
exports.BarListComponent = BarListComponent;
//# sourceMappingURL=barList.component.js.map