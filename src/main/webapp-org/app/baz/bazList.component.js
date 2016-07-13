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
 * This component injects "bazList" (resolve data)
 *
 * It creates a list of uiSref (links) to the baz details
 *
 * It does not have a nested <ui-view> viewport because the nested app.baz.details state
 * replaces this component with the BazDetailsComponent, using view targeting.
 */
var template = "\n<h3>Baz Component</h3>\n\n<ul>\n  <li *ngFor=\"let baz of bazs\"><a uiSref=\".details\" [uiParams]=\"{bazId: baz.id}\">{{baz.name}}</a>\n  </li>\n</ul>\n";
var BazListComponent = (function () {
    // resolve data injected by name 'bazList' into 'bazs' property
    function BazListComponent(bazs) {
        this.bazs = bazs;
    }
    BazListComponent = __decorate([
        core_1.Component({
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES],
            selector: 'baz',
            template: template
        }),
        __param(0, core_1.Inject("bazList")), 
        __metadata('design:paramtypes', [Object])
    ], BazListComponent);
    return BazListComponent;
}());
exports.BazListComponent = BazListComponent;
//# sourceMappingURL=bazList.component.js.map