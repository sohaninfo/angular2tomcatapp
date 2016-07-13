"use strict";
var app_component_1 = require("./app.component");
var foo_states_1 = require("./foo/foo.states");
var bar_states_1 = require("./bar/bar.states");
var baz_states_1 = require("./baz/baz.states");
/**
 * This file exports all the application states as an array.
 *
 * - It first imports foo, bar, and baz nested states from foo/foo.states.ts, bar/bar.states.ts, and baz/baz.states.ts.
 * - It defines the top-level states (MAIN_STATES).
 * - Then, it builds and exports an array with all the states.
 * - This array is imported by router.config.ts and the states are registered with the `StateProvider`
 */
// The top level states
var MAIN_STATES = [
    // The top-level app state. This state fills the root
    // <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', component: app_component_1.AppComponent }
];
// Combine MAIN_STATES, FOO_STATES, and BAR_STATES and export them.
// This array is imported in bootstrap/router.config.ts, then each state is registered
exports.INITIAL_STATES = MAIN_STATES.concat(foo_states_1.FOO_STATES).concat(bar_states_1.BAR_STATES).concat(baz_states_1.BAZ_STATES);
//# sourceMappingURL=app.states.js.map