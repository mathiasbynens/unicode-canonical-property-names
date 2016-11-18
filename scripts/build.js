'use strict';

const binaryProperties = require('unicode-9.0.0').Binary_Property;
const binaryEmojiProperties = require('unicode-tr51');
const propertyAliases = require('unicode-property-aliases');
const jsesc = require('jsesc');

// Ensure `ASCII`, `Any`, and `Assigned` are included. They are the only
// binary properties that aren’t mentioned in `PropertyValueAliases.txt`.
const canonicalPropertyNames = new Set([
	...binaryProperties,
	...binaryEmojiProperties,
	...propertyAliases.values()
]);

const output = `module.exports = ${
	jsesc(canonicalPropertyNames, {
		'compact': false
	})
};\n`;
require('fs').writeFileSync('index.js', output);
