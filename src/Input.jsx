/**
 * vstack by @vslinko
 */

var React = require('react');

var Input = React.createClass({
    render: function() {
        return (
            <input {...this.props} className="Input" />
        );
    }
});

module.exports = Input;
