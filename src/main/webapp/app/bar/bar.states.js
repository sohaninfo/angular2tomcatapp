"use strict";
var http_1 = require("@angular/http");
var barList_component_1 = require("./barList.component");
var barDetail_component_1 = require("./barDetail.component");
var barFooter_component_1 = require("./barFooter.component");
var ui_router_ng2_1 = require("ui-router-ng2");
/**
 * This file defines the states for the `bar` module.
 * The states are exported as an array.
 * The parent module imports this array and concats them into the master state list.
 */
/** The 'bar' submodule's states. */
exports.BAR_STATES = [
    // A state for the 'app.bar' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `BarListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `BarFooterComponent`
    // - Fetches barList data using a resolve, then the component displays the data
    {
        name: 'app.bar',
        url: '/bar',
        views: {
            $default: { component: barList_component_1.BarListComponent },
            footer: barFooter_component_1.BarFooterComponent
        },
        resolve: [
            // Inject 'http' and fetch all the bar data
            { token: 'barList', deps: [http_1.Http], resolveFn: function (http) {
                    return http.get('/data/barData.json').map(function (res) { return res.json(); }).toPromise();
                } }
        ]
    },
    // A child state of app.bar
    // - This state fills the unnnamed <ui-view> (in `BarListComponent` from  `app.foo` state) with `BarDetailsComponent`
    // - Has a parameter :barId which appears in the URL
    // - Resolves barDetail, then the component displays the data
    {
        name: 'app.bar.details', url: '/?barId', component: barDetail_component_1.BarDetailsComponent,
        resolve: [
            // Inject the barList (from the parent) and find the correct
            { token: 'barDetail', deps: ['barList', ui_router_ng2_1.Transition], resolveFn: function (barList, trans) {
                    return barList.find(function (item) { return item.id == trans.params().barId; });
                } }
        ]
    },
];
//# sourceMappingURL=bar.states.js.map