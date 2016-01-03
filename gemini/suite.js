/**
 * vstack by @vslinko
 */

var gemini = require("gemini");

gemini.suite('Input', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('#placeholder')
        .before(function(actions, find) {
            // actions.wait(1000);
            this.input = find('.Input');
        })
        .capture('01-plain', function(actions, find) {
            // actions.wait(1000);
        })
        .capture('02-hovered', function(actions, find) {
        	actions.mouseMove(this.input);
            // actions.wait(2000);
        })
        .capture('03-pressed', function(actions, find) {
        	actions.mouseDown(this.input);
        	// actions.wait(50);
        })
        .capture('04-focused', function(actions, find) {
            actions.mouseUp(this.input);
        	// actions.wait(50);
        })
        .capture('05-filled', function(actions, find) {
        	actions.sendKeys('.Input');
        	// actions.wait(50);
        });
});
