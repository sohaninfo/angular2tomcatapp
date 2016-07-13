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
 * This component injects "barDetail" (resolve data) into the matching @Input and renders the detail */
var template = "\n<h5>Bar Details</h5>\n\n<label>Id: </label><input type=\"text\" [value]=\"bar.id\"><br>\n<label>Name: </label><input type=\"text\" [value]=\"bar.name\"><br>\n<label>Count: </label><input type=\"text\" [value]=\"bar.description\"><br>\n";
var BarDetailsComponent = (function () {
    function BarDetailsComponent() {
    }
    __decorate([
        core_1.Input('barDetail'), 
        __metadata('design:type', Object)
    ], BarDetailsComponent.prototype, "bar", void 0);
    BarDetailsComponent = __decorate([
        core_1.Component({
            selector: 'bar-detail',
            template: template,
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());
exports.BarDetailsComponent = BarDetailsComponent;
//# sourceMappingURL=barDetail.component.js.map