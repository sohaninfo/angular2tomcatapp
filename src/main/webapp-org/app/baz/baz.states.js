"use strict";
var http_1 = require("@angular/http");
var bazList_component_1 = require("./bazList.component");
var bazDetail_component_1 = require("./bazDetail.component");
var bazFooter_component_1 = require("./bazFooter.component");
var ui_router_ng2_1 = require("ui-router-ng2");
/**
 * This file defines the states for the `baz` module.
 * The states are exported as an array.
 * The parent module imports this array and concats them into the master state list.
 */
/** The 'baz' submodule's states. */
exports.BAZ_STATES = [
    // A state for the 'app.baz' submodule.
    // - Fills in the unnamed ($default) <ui-view> from `app` state with `BazListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `BazFooterComponent`
    // - Fetches bazList data using a resolve, then the component displays the data
    {
        name: 'app.baz',
        url: '/baz',
        views: {
            $default: { component: bazList_component_1.BazListComponent },
            footer: { component: bazFooter_component_1.BazFooterComponent }
        },
        resolve: [
            // Inject 'Http' and fetch all the baz data
            { token: 'bazList', deps: [http_1.Http], resolveFn: function (http) {
                    return http.get('/data/bazData.json').map(function (res) { return res.json(); }).toPromise();
                } }
        ]
    },
    // A child state of app.baz
    // - This state fills the unnnamed ($default) <ui-view> (in the `AppComponent` from  `app` state) with
    // `BazDetailsComponent`. This effectively replaces the baz list view with a baz detail view.
    // - Has a path parameter :bazId which appears in the URL
    // - Resolves bazDetail, then the component displays the data
    {
        name: 'app.baz.details',
        url: '/:bazId',
        views: {
            '$default@app': { component: bazDetail_component_1.BazDetailsComponent }
        },
        resolve: [
            // Inject the bazList (from the parent) and find the correct
            { token: 'bazDetail', deps: ['bazList', ui_router_ng2_1.Transition], resolveFn: function (bazList, trans) {
                    return bazList.find(function (item) { return item.id == trans.params().bazId; });
                } }
        ]
    },
];
//# sourceMappingURL=baz.states.js.map