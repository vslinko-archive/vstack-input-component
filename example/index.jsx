/**
 * vstack by @vslinko
 */

if (!Array.isArray) {
    require('es5-shim/es5-shim');
    require('es5-shim/es5-sham');
}

var React = require("react");
var Input = require("..");

require('normalize.css/normalize.css');
require('../src/Input-Normalize.css');

function render() {
    React.render(<Input />, document.getElementById('placeholder'));
}

if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', render);
} else {
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            render();
        }
    };
}
