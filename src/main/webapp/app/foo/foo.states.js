"use strict";
var foo_component_1 = require("./foo.component");
var nest1_component_1 = require("./nest1.component");
var nest2_component_1 = require("./nest2.component");
var fooFooter_component_1 = require("./fooFooter.component");
/**
 * This file defines the states for the `foo` module.
 * The states are exported as an array.
 * The parent module imports this array and concats them into the master state list.
 */
/**
 * The 'foo' submodule's states.
 */
exports.FOO_STATES = [
    // A state for the 'app.foo' submodule,
    // It fills the unnamed <ui-view> ($default) (in the AppComponent from the `app` state) with `FooComponent`
    {
        name: 'app.foo',
        url: '/foo',
        views: {
            $default: { component: foo_component_1.FooComponent },
            footer: { component: fooFooter_component_1.FooFooterComponent }
        }
    },
    // A child state of app.foo; it fills the <ui-view> in app.foo with Nest1Component
    { name: 'app.foo.nest1', url: '/nest1', component: nest1_component_1.Nest1Component },
    // A child state of app.foo; it fills the <ui-view> in app.foo with Nest2Component
    { name: 'app.foo.nest2', url: '/nest2', component: nest2_component_1.Nest2Component }
];
//# sourceMappingURL=foo.states.js.map